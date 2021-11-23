from flask import Flask, jsonify, request
# import pymongo

app = Flask(__name__)

@app.route('/')
def test():
    return "server started"
        
if __name__ == '__main__':
    app.run (debug=True)