from flask import Flask, request, jsonify, flash, Response
from flask.wrappers import Response
import flask_cors
from flask_login import LoginManager, login_manager, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from models import User
import base64
from database import Database
from bson.objectid import ObjectId
import gridfs

cors = flask_cors.CORS()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'top secret'

login_manager = LoginManager(app)
login_manager.login_view = 'api_login'
cors = flask_cors.CORS()

cors.init_app(app)
login_manager.init_app(app)
grid_fs = gridfs.GridFS(Database.db)


@app.route('/')
def home():
    return "success" ,  200

@app.route('/login')    
def login():
    return 'success', 200

# Register new user, Return request['next'] if it exists
@app.route('/api/register', methods = ['POST'])
def register():
    if request.method == 'POST':
        req = request.form.to_dict()
        email = req.get('email', None)
        password = req.get('password', None)

        # Check for existing user
        find_user = User.get_by_email(email)
        if find_user is not None:
            flash('Email address already exists')
            print()
            return jsonify(status = "User already exists"), 400

        pwd_hash = generate_password_hash(password, method="pbkdf2:sha256", salt_length=16)
        
        file = request.files['image']
        id = grid_fs.put(file, content_type = file.content_type, filename = email)
        
        new_user = User(email, pwd_hash, _id = id)

        # Save user to database
        if new_user:
            new_user.document['photo_url'] = 'localhost:5000/getimage/{}'.format(str(id))
            new_user.save_to_mongo(new_user.document)
            return jsonify(status="User registered successfully", id = str(new_user._id)), 200
        

# Login, Return request['next'] if it exists
@app.route('/api/login', methods=['POST'])
def api_login():
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
        print(pwd_check)
        if pwd_check == False:
            flash('Incorrect Password')
            return jsonify(status="Password Incorrect"), 400
        login_user(user)
        print(user.document)

        return jsonify(status="Logged in successfully"), 200

@app.route('/getimage/<id>')
def getimage(id):
    item = Database.col.find_one({'_id': id})
    
    file = grid_fs.get(ObjectId(item['_id']))
    
    return Response(file.read(), mimetype=file.content_type)


# Logout current user
@app.route('/api/logout')
@login_required
def logout():
    # print(current_user.email)
    logout_user()
    return jsonify(status="Logged out successfully"), 200

@app.route('/test')
def test():
    return jsonify(response = "api call successful"), 200

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