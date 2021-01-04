from flask import Flask, render_template
from flask import jsonify
app = Flask(__name__)


@app.route('/')
def hello_home():
    return render_template('index.html')

@app.route('/pi-page')
def pi_page():
    return render_template('pi-page.html')

@app.route('/parking')
def parking():
    return render_template('parking.html')

@app.route('/searchCarNumber')
def searchCarNumber():
    return render_template('searchCarNumber.html')

if __name__ == '__main__':
    app.run(debug=True)
