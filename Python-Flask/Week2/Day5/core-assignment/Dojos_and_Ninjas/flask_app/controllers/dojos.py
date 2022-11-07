from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.dojo import Dojo


@app.route('/')
def index():
    list_dojo= Dojo.get_all()
    return render_template('index.html', dojos = list_dojo )

@app.route('/dojo', methods=['POST'])
def create():
    # print('-'*50)
    # print("**********",request.form,"******************")
    # data ={}
    data = {"name":request.form['name']}
    Dojo.create_dojo(data)
    return redirect('/')