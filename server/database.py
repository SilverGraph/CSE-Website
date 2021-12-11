import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

class Database:
    myclient = pymongo.MongoClient('mongodb+srv://RajAryan:'+ os.getenv("DB_PASSWORD") +'@cluster0.aug5r.mongodb.net/test?retryWrites=true&w=majority')
    db = myclient['test']
    col = db['newTest']

    @classmethod
    def insert(cls, document):
        cls.col.insert_one(document)

    @classmethod
    def delete(cls, email):
        cls.col.delete_one({'email': email})

    @classmethod
    def update(cls, email, new_pwd_hash = '', new_email = ''):
        if new_email == '':
            new_email = email
        cls.col.update_one({'email': email}, {"$set": {'email': new_email, 'pwd_hash': new_pwd_hash}})


if __name__=='__main__':
    Database.delete('DaddyCool')