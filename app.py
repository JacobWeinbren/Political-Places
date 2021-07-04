import requests, os
from flask import Flask, render_template
from dotenv import load_dotenv

load_dotenv()
clientid  = os.getenv("clientid")
clientsecret = os.getenv("clientsecret")

app = Flask(__name__)
 # pip install requests
def get_token():
    params = {
        'client_id': clientid,
        'client_secret': clientsecret,
        'grant_type': "client_credentials"
    }
    request = requests.get(
        'https://www.arcgis.com/sharing/rest/oauth2/token',
        params=params)
    response = request.json()
    token = response["access_token"]
    return token

@app.route('/')
def index():
    token = get_token()
    return render_template('hello.html', token=token)