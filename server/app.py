from flask_cors import CORS, cross_origin
import gridfs
import json
from models import User
from database import Database
from bson.objectid import ObjectId
from flask.wrappers import Response
from flask import Flask, request, jsonify, flash, Response
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, login_manager, login_user, logout_user, login_required, current_user


app = Flask(__name__)
app.config['SECRET_KEY'] = 'top secret'
app.config['CORS_HEADERS'] = 'Content-Type' 

cors = CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
login_manager = LoginManager(app)
login_manager.login_view = 'api_login'
login_manager.init_app(app)

grid_fs = gridfs.GridFS(Database.db)


# Register new user, Return request['next'] if it exists
@app.route('/api/register', methods = ['POST'])
def register():
    if request.method == 'POST':
        req = request.form.to_dict()
        name = req.get('name', None)
        email = req.get('email', None)
        password = req.get('password', None)
        roll = req.get('roll', None)
        batch = req.get('batch', None)
        print(req)
        # Check for existing user
        find_user = User.get_by_email(email)
        if find_user is not None:
            flash('Email address already exists')
            return jsonify(status = "User already exists"), 400

        pwd_hash = generate_password_hash(password, method="pbkdf2:sha256", salt_length=16)
        
        file = request.files['image']
        print(file)
        id = grid_fs.put(file, content_type = file.content_type, filename = email)
        
        new_user = User(name, email, pwd_hash, roll, _id = id, batch = batch)

        # Save user to database
        if new_user:
            new_user.document['photo_url'] = 'localhost:5000/getimage/{}'.format(str(id))
            new_user.save_to_mongo(new_user.document)
            login_user(new_user, remember=True)
            return jsonify(status="User registered successfully", id = str(new_user._id)), 200
        

# Login, Return request['next'] if it exists
@app.route('/api/login', methods=['POST', 'GET'])
def api_login():
    if current_user.is_authenticated:
        return jsonify(status = "Already logged in")
    if request.method == 'POST':
        req = request.form.to_dict()
        email = req.get('email', None)
        password = req.get('password', None)

        # Check if user exists
        user = User.get_by_email(email)

        if user is None:
            flash('Incorrect Login Details')
            return jsonify(status="Incorrect login details"), 400
        
        # Check Password, match with hash
        pwd_check = user.validate_password(email, password)
        
        if pwd_check == False:
            flash('Incorrect Password')
            return jsonify(status="Password Incorrect"), 400
        login_user(user, remember=True)
        return jsonify(status="Logged in successfully", id = str(user._id)), 200
            

@app.route('/getimage/<id>')
def getimage(id):
    item = Database.col.find_one({'_id': ObjectId(id)})
    # print(item) 
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

    return jsonify(students=l), 200

@app.route('/test') 
def test():
    return jsonify(response = "api call successful"), 200

@app.route('/api/checklogin')
def check_login():
    print(current_user)
    return str(current_user.is_authenticated)

@login_manager.unauthorized_handler
def unauth():
    return jsonify(status="Where you goin"), 400

@login_manager.user_loader
def load_user(user_id):
    user = User.get_by_id((user_id))
    if user is not None:
        return user
    else:
        return None

if __name__ == '__main__':
    app.run(debug=True)