from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo


@app.route('/ninja')
def New_ninjas():
    dojo = Dojo.get_all()
    return render_template('ninja.html' ,dojo=dojo)

@app.route('/ninja/new', methods=['POST'])
def create_ninjapyth():
    data = request.form
    Ninja.create_ninjas(data)
    return redirect('/')

@app.route('/<int:id>')
def show_dojo_ninjas(id):
    data={
        'id':id
    }
    ninja= Ninja.get_ninjas_by_dojo_id(data)
    dojo=Dojo.get_one_by_id(data)
    return render_template ('show_dojo.html', ninja=ninja , dojo=dojo)


