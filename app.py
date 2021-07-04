import requests, os, ast

from flask import Flask, render_template
from flask_minify import minify

from dotenv import load_dotenv
from sassutils.wsgi import SassMiddleware

#Sets env variables
load_dotenv()
clientid  = os.getenv("clientid")
clientsecret = os.getenv("clientsecret")

app = Flask(__name__)

#Minifies output
minify(app=app, html=True, js=True, cssless=True)

#Handles sass
app.wsgi_app = SassMiddleware(app.wsgi_app, {
    'app': {
        'sass_path': 'static/sass',
        'css_path': 'static/css',
        'strip_extension': True,
    },
})

#Gets arcgis token
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

#Main page
@app.route('/')
def index():
    token = get_token()
    return render_template('index.html', token=token)

#https encryption
if __name__ == "__main__":
    app.run()