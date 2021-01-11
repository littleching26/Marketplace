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
db = DBInformation.connetToDb('KMINI')
collectUserInformation = pymongo.collection.Collection(db, 'USER_INFORMATION')
collectMiniApplication = pymongo.collection.Collection(db, 'MINI_APPLICATION')

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

@app.route('/add-mini-point', methods=['POST'])
def addMiniPoint():
    userData = request.get_json()
    roundPoint = userData.pop('THIS_ROUND_POINTS')
    #加總得分
    totalPoints = userData['POINTS'] + roundPoint
    collectUserInformation.update_one( userData, {"$set": {'POINTS': totalPoints}})
    #寫回值
    userData['POINTS'] = totalPoints
    return jsonify(userData)


@app.route('/index/<userName>/<email>')
def index(userName, email):
    defaultImgUrl = 'img/ibmerLogo.png'
    welcomeData = collectUserInformation.find_one({'USER_NAME': userName, "EMAIL": email}, {'_id': False})
    if(welcomeData is None):
        welcomeData = {"USER_NAME": userName, "IMG_URL": defaultImgUrl, "POINTS": 0, "EMAIL": email}
        collectUserInformation.insert_one(welcomeData)

    return render_template('index.html', welcomeData=welcomeData)


@app.route('/display-ranking')
def displayRanking():
    return render_template('display-ranking.html')

@app.route('/get-ranking-data', methods=['POST'])
def getRankingData():
    userDatas = collectUserInformation.find({}).sort('POINTS', -1).limit(5)
    return DataProcessService.multipleDataPopId(userDatas)


@app.route('/get-click-points/<points>/<userName>')
def getClickPoints(points, userName):
    return render_template('get-click-points.html', points=points, userName=userName)


@app.route('/exchange-item/<userName>')
def exchangeItem(userName):
    return render_template('exchange-item.html', userName=userName)

if __name__ == '__main__':
    app.run(debug=True)
