from flask_cors import CORS
import gridfs
from models import User
from database import Database
from bson.objectid import ObjectId
from flask.wrappers import Response
from flask import Flask, request, jsonify, flash, Response
from werkzeug.security import generate_password_hash
from flask_login import LoginManager, login_manager, login_user, logout_user, login_required, current_user
from dotenv import load_dotenv
import ast
import os

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['CORS_HEADERS'] = 'Content-Type' 
app.config['SESSION_COOKIE_DOMAIN'] = False
app.config['Access-Control-Allow-Credentials'] = True
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)

cors = CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
login_manager = LoginManager(app)
login_manager.login_view = 'api_login'
login_manager.init_app(app)

grid_fs = gridfs.GridFS(Database.db)

# Register new user
@app.route('/api/register', methods = ['POST'])
def register():
    if request.method == 'POST':
        req = request.form.to_dict()
        name = req.get('name', None)
        password = req.get('password', None)
        roll = req.get('roll', None).lower()
        description = req.get('description', None)
        social_media = ast.literal_eval(req.get('social_media', None))
        
        email = roll + '@iiit-bh.ac.in'
        batch = '20' + roll[2:4]
        valid_roll = True

        # Check for valid roll number
        if((batch != '2020') and (batch != '2021')):
            valid_roll = False
        elif(len(roll) != 7):
            valid_roll = False
        elif(roll[0:2] != 'b1'):
            valid_roll = False

        if(not valid_roll):
            return jsonify(status='Invalid roll number'), 400

        # Check for existing user
        find_user = User.get_by_email(email)
        if find_user is not None:
            return jsonify(status = "User already exists"), 400

        pwd_hash = generate_password_hash(password, method="pbkdf2:sha256", salt_length=16)
        
        file = request.files['image']
        id = grid_fs.put(file, content_type = file.content_type, filename = email)
        
        new_user = User(name, email, pwd_hash, roll, _id = id, batch = batch, description=description, social_media=social_media)

        # Save user to database
        if new_user:
            new_user.document['photo_url'] = 'https://cse-2k25.herokuapp.com/getimage/{}'.format(str(id))

            new_user.save_to_mongo(new_user.document)
            login_user(new_user,remember=True)
            return jsonify(status="User registered successfully", id = str(new_user._id)), 200
        

# Login, Return request['next'] if it exists
@app.route('/api/login', methods=['POST', 'GET'])
def api_login():
    if current_user.is_authenticated:
        return jsonify(status = "Already logged in")
    if request.method == 'POST':
        req = request.form.to_dict()
        email = req.get('roll', None).lower() + '@iiit-bh.ac.in'
        password = req.get('password', None)

        # Check if user exists
        user = User.get_by_email(email)

        if user is None:
            return jsonify(status="Incorrect login details"), 400
        
        # Check Password, match with hash
        pwd_check = user.validate_password(email, password)
        
        if pwd_check == False:
            return jsonify(status="Password Incorrect"), 400
        
        login_user(user,remember=True)
        return jsonify(status='Logged in successfully')
        


@app.route('/getimage/<id>')
def getimage(id):
    item = Database.col.find_one({'_id': ObjectId(id)})
    file = grid_fs.get(ObjectId(item['_id']))
     
    return Response(file.read(), mimetype=file.content_type)


# Logout current user
@app.route('/api/logout')
@login_required
def logout():
    logout_user()
    return jsonify(status="Logged out successfully"), 200

@app.route('/students/<batch>')
@login_required
def get_batch21(batch):
    cursor = Database.col.find({'batch': batch})
    l={}
    for item in cursor:
        roll_id = item['roll']
        l[roll_id] = {}
        l[roll_id]['name'] = item['name']
        l[roll_id]['email'] = item['email']
        l[roll_id]['date'] = item['date_created']
        l[roll_id]['photo_url'] = item['photo_url']
        l[roll_id]['description'] = item['description']
        l[roll_id]['social_media'] = item['social_media']

    return jsonify(students=l), 200

@app.route('/api/checklogin')
def check_login():
    if current_user.is_authenticated:
        return jsonify({'Status': True})
    else:
        return jsonify({'Status': False})

@login_manager.unauthorized_handler
def unauth():
    return jsonify(status="HOW YOU GET IN HERE"), 400

@login_manager.user_loader
def load_user(user_id):
    user = User.get_by_id((user_id))
    if user is not None:
        return user
    else:
        return None

if __name__ == '__main__':
    app.run(debug=True)
