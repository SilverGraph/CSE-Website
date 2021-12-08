from flask import Flask, request, jsonify, flash, Response
import flask_cors
from flask_login import LoginManager, login_manager, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
import json
import gridfs
import codecs
from database import *
from models import User
from http.client import HTTPResponse
import base64
import uuid

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
        req = request.args.to_dict()
        email = req.get('email', None)
        password = req.get('password', None)
        photo_url = req.get('photo_url', None)
        print(req['email'])

        # Check for existing user
        find_user = User.get_by_email(email)
        if find_user is not None:
            flash('Email address already exists')
            print()
            return jsonify(status = "User already exists"), 400

        pwd_hash = generate_password_hash(password, method="pbkdf2:sha256", salt_length=16)

        new_user = User(email, pwd_hash, photo_url)

        if new_user:
            new_user.save_to_mongo()
            return jsonify(status="User registered successfully"), 200

# Login, Return request['next'] if it exists
@app.route('/api/login', methods=['POST'])
def api_login():
    if request.method == 'POST':
        req = request.args.to_dict()
        email = req.get('email', None)
        password = req.get('password', None)

        # Check if user exists
        user = User.get_by_email(email)
        if user is None:
            flash('Incorrect Login Details')
            jsonify(status="Incorrect login details"), 400
        
        # Check Password, match with hash
        pwd_check = user.validate_password(email, password)

        if pwd_check == False:
            flash('Incorrect Password')
            jsonify(status="Password"), 400

        login_user(user)
        return jsonify(status="Logged in successfully"), 200

# Logout current user
@app.route('/api/logout')
@login_required
def logout():
    # print(current_user.email)
    logout_user()
    return jsonify(status="Logged out successfully"), 200

# @app.route('/test')
# def test():
#     return jsonify(response = "api call successful"), 200

@login_manager.unauthorized_handler
def unauth():
    return jsonify(status="Where you goin"), 400

@login_manager.user_loader
def load_user(user_id):
    user = User.get_by_id(user_id)
    if user is not None:
        return user
    else:
        return None
    
# @app.route('/delete', methods=['POST'])
# def delete_user():
#     req = request.args.to_dict()
#     email = req.get('email', None)
#     user = User.get_by_email(email)
#     if user is None:
#         flash('Incorrect Login Details')
#         jsonify(status="Incorrect login details"), 400
#     else:
#         User.delete_user(email)
    
#     return jsonify(status=f"Deleted {email} account"), 200

@app.route('/image/', methods = ["POST"])
def saveImage():
    if 'image' in request.files:
        image = request.files['image']
        name = request.form.get('name')
        _id = uuid.uuid4().hex
        # base64_data = codecs.encode(image.read(), 'base64')
        id = grid_fs.put(image, content_type = image.content_type, filename = name)
        imgtype = image.content_type
    query = {
        '_id': _id,
        'id': id,
        'name': name,
        'imgtype': imgtype,
        # 'encoded' : base64_data
    }
    status = Database.insert(query)
    if status:
        return jsonify({'result': 'Image uploaded successfully', '_id': _id, 'name': name , 'type': imgtype}),201
    return jsonify({'result': 'Error occurred during uploading'}),500

@app.route('/getImage/<ID>')
def get_image(ID):
    item = Database.col.find_one({'_id': ID})
    image = grid_fs.get(item['id'])
    # base64_data = codecs.encode(image.read(), 'base64')
    imgtype = image.content_type
    # image = item['encoded'].decode('utf-8')
    # base64_data = codecs.encode(image.read(), 'base64')
    
    # return Response(f"<img src = data={imgtype};base64, {image}>", mimetype=imgtype)
    return Response(image.read(), mimetype=imgtype)
    
    
    
    
# @app.route('/image/', methods = ["POST"])
# def saveImage():
#     if 'image' in request.files:
#         image = request.files['image']
#         name = request.form.get('name')
#         file_stream = image.stream # Can be treated as a file object
#         encoded_string = base64.b64encode(file_stream.read())
#         imgtype = image.content_type

#         _id = uuid.uuid4().hex

#         Database.col.insert_one({'_id': _id, 'name': name, 'encoded_string': encoded_string, 'content_type':imgtype})
#         # return jsonify({'result': 'Image uploaded successfully', 'id': name, 'type': imgtype}),201
#         return jsonify({'id': _id, 'name': name})
    
# @app.route('/getimage/<ID>')
# def get_image(ID):
#     item = Database.col.find_one({'_id': ID})
#     base64_data = item['encoded_string']
#     imgtype = item['content_type']
#     # base64_data = codecs.encode(image.read(), 'base64')
#     decoded_string = base64.b64decode(base64_data)

#     #
#      # with open('test.jpeg', 'wb') as f:
#        # f.write(decoded_string)


#     return Response(decoded_string, mimetype=imgtype)

if __name__ == '__main__':
    app.run(debug=True)