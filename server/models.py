from datetime import datetime
from werkzeug.security import check_password_hash
from database import Database
from bson.objectid import ObjectId
from flask_login import UserMixin

class User(UserMixin):
    """The User model"""

    def __init__(self, name, email, pwd_hash, roll, _id = None, date_created=None, content_type = 'image/jpeg', photo_url = None, batch = None, description = None, social_media = None) -> None:
        self.name = name
        self.email = email
        self.pwd_hash = pwd_hash 
        self.roll = roll
        if photo_url:
            self.photo_url = photo_url
        self._id = str(_id)
        self.batch = batch
        self.id = _id
        self.description = description
        self.social_media = social_media
        self.content_type = content_type

        # Date Created
        if date_created is None:
            now = datetime.now()
            _date_created = now.strftime("%m/%d/%Y, %H:%M:%S")
            self.date_created = _date_created
        else:
            self.date_created = date_created

        self.generate_document()

    def generate_document(self):
        # Use this in collection.insert_one()
        self.document = {
            '_id': ObjectId(self._id),
            'name' : self.name, 
            'roll': self.roll ,
            'email': self.email, 
            'pwd_hash': self.pwd_hash, 
            'date_created': self.date_created, 
            'batch': self.batch,
            'description': self.description,
            'social_media': self.social_media,
            'content_type': self.content_type
        }

    @staticmethod
    def validate_password(email, password_string):
        try:
            result = Database.col.find_one({'email': email}, {'_id': 0})
        except:
            pass
        else:
            return check_password_hash(result['pwd_hash'], password_string)

    @classmethod
    def get_by_email(cls, email):
        data = Database.col.find_one({'email': email})
        if data is not None:
            # del data['date created']
            return User(**data)

    @classmethod
    def get_by_id(cls, _id):
        data = Database.col.find_one({'_id': ObjectId(_id)})
        if data is not None:
            return User(**data)

    def save_to_mongo(self, document=None):
        if document:
            Database.insert(document)
        else:
            Database.insert(self.document)

if __name__ == "__main__":
    test = User.get_by_email('karish.fafgfgdfke@gmail.com')
    print(test)