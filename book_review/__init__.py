from flask import Flask
from book_review.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    from book_review.modules.author import author
    from book_review.modules.reviewer import reviewer

    app.register_blueprint(author, url_prefix="/author")
    app.register_blueprint(reviewer, url_prefix="/reviewer")
    
    return app

