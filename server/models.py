from datetime import datetime
from pymongo.common import validate
from werkzeug.security import check_password_hash
from database import Database
import uuid


class User:
    """The User model"""

    def __init__(self, email, pwd_hash, photo_url, _id = None, date_created=None) -> None:
        self.email = email
        self.pwd_hash = pwd_hash 
        self.photo_url = photo_url
        self._id = uuid.uuid4().hex if _id is None else _id

        # Date Created
        if date_created is None:
            now = datetime.now()
            _date_created = now.strftime("%m/%d/%Y, %H:%M:%S")
            self.date_created = _date_created
        else:
            self.date_created = date_created

    def is_authenticated(self):
        return True
    def is_active(self):
        return True
    def is_anonymous(self):
        return False
    def get_id(self):
        return self._id

    def get_document(self):
        # Use this in collection.insert_one()
        return {'_id': self._id, 'email': self.email, 'pwd_hash': self.pwd_hash, 'photo_url': self.photo_url, 'date_created': self.date_created}

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
        data = Database.col.find_one({'_id': _id})
        if data is not None:
            return User(**data)
        
    @classmethod
    def delete_user(cls, email):
        data = Database.col.find_one({'email' : email})
        if data is not None:
            Database.delete(email)

    def save_to_mongo(self):
        Database.insert(self.get_document())

if __name__ == "__main__":
    test = User.get_by_email('karish.fafgfgdfke@gmail.com')
    print(test)