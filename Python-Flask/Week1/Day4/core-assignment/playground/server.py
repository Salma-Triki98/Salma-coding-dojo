from flask import Flask, render_template
app=Flask(__name__)

@app.route('/play')
def play():
    return render_template('index.html')

@app.route('/play/<int:num>')
def numb(num):
    return render_template('index.html' , num=num )

@app.route('/play/<int:num>/<string:color>')
def color(num,color):
    return render_template('index.html' , num=num , color=color )



if __name__=="__main__":
    app.run(debug=True) 