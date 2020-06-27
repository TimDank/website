from flask import Flask, render_template, request

app = Flask(__name__)

#Set routes for HTML pages
@app.route("/")
def default():
    return render_template("homepage.html")
