from flask import Blueprint, jsonify, render_template, request, redirect, url_for, flash, session


author = Blueprint('author', __name__)

@author.route('/')
def login():
    return render_template("author/author_login.html")