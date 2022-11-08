from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.user import Users



@app.route('/')
def retour():
    return redirect('/users')

@app.route('/users')
def index():
    use = Users.get_all()
    return render_template('index.html', use = use )


@app.route('/users/new')
def show_users():
    return render_template("New_user.html")

@app.route('/users/News', methods=['POST'])
def create_user():
    print("**********",request.form,"******************")
    Users.create_users(request.form)
    return redirect('/users/<int:id>')

@app.route('/users/<int:id>')
def user(id):
    data={
        'id':id
    }
    one_user=Users.get_one_user(data)
    return render_template('Show_user.html', one_user=one_user)

@app.route('/users/<int:id>/edit')
def edit_user(id):
    data={
        'id':id
    }
    one_user=Users.get_one_user(data)
    return render_template('edit.html', one_user=one_user)


@app.route('/users/update', methods=['POST'])
def update():
    print("*"*25)
    print("**********",request.form,"******************")
    Users.edit_one_user(request.form)
    print ("************",request.form)
    return redirect('/users')

@app.route('/users/<int:id>/delete')
def delete(id):
    data= {
        'id':id
    }
    print("**********",data,"******************")
    Users.delete(data)
    return redirect('/users')




