from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/say/<string:name>')
def hi(name):
    return f'Hi {name}'


@app.route('/repeat/<int:num>/<string:greeting>')
def repeat(num,greeting):
    return f'{num*greeting}'










if __name__=="__main__":
    app.run(debug=True) 