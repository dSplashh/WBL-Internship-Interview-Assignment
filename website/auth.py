from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/video')
def video():
    return render_template("video.html")

@auth.route('/post_rate')
def post_rate():
    return render_template("postRate.html")
    
