# -*-encoding:utf8-*-
# -*- coding: utf-8 -*-
from flask import Flask, render_template, redirect
from flask import jsonify
from flask_pymongo import pymongo
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
    defaultImgUrl = 'img/ibmerLogo.png'
    db = DBInformation.connetToDb('KMINI')
    collectUserInformation = pymongo.collection.Collection(db, 'USER_INFORMATION')
    collectMiniApplication = pymongo.collection.Collection(db, 'MINI_APPLICATION')
    # 這是用ajax的語法
    # print('--display json data--', request.get_json())
    welcomeData = collectUserInformation.find_one({'USER_NAME': userName}, {'_id': False})
    if(welcomeData is None):
        welcomeData = {"USER_NAME": userName, "IMG_URL": defaultImgUrl, "SELECTED_MINIS": [], "POINTS": 0}
        collectUserInformation.insert_one(welcomeData)

    miniApps = collectMiniApplication.find({}, {'_id': False})
    # 類型為繳費支付的miniApp
    pay = []
    for app in miniApps:
        if(app['CATEGORY'] == 'pay'):
            pay.append(app)
    return render_template('index.html', welcomeData=welcomeData, pay=pay)
     
    # return DataProcessService.multipleDataPopId(welcomeData)

    # return render_template('index.html')


# @app.route('/load-index-page', methods=['POST'])
# def loadIndexPage():
    
if __name__ == '__main__':
    app.run(debug=True)
