# -*-encoding:utf8-*-
# -*- coding: utf-8 -*-
from flask import Flask, render_template, redirect
from flask import jsonify
from pymongo import MongoClient
from connectDb import DBInformation
import json
from bson import json_util
from DataProcessService import DataProcessService
from flask import request
app = Flask(__name__)


@app.route('/')
def login():
    return render_template('login.html')

@app.route('/pi-page')
def pi_page():
    return render_template('pi-page.html')

@app.route('/parking')
def parking():
    return render_template('parking.html')

@app.route('/searchCarNumber')
def searchCarNumber():
    return render_template('searchCarNumber.html')


@app.route('/index/<userName>')
def index(userName):
    collect = DBInformation.connetToDb1('KMINI', 'USER_INFORMATION')
    # 這是用ajax的語法
    # print('--display json data--', request.get_json())
    welcomeData = collect.find_one({'USER_NAME': userName}, {'_id': False})
    return render_template('index.html', userInformation=welcomeData, imgUrl=welcomeData['IMG_URL'])
    # return DataProcessService.multipleDataPopId(welcomeData)

    # return render_template('index.html')


# @app.route('/load-index-page', methods=['POST'])
# def loadIndexPage():
    
if __name__ == '__main__':
    app.run(debug=True)
