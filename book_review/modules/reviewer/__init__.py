from flask import Blueprint, render_template

reviewer = Blueprint('reviewer', __name__, template_folder='templates')

@reviewer.route('/login')
def login():
    return render_template("reviewer/review_login.html")
