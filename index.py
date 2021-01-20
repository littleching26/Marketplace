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
collectLoginPeople = pymongo.collection.Collection(db, 'LOGIN_PEOPLE')

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
    collectUserInformation.update_one(
        {"EMAIL": userData['EMAIL']}, {"$set": {'POINTS': totalPoints}})
    #寫回值
    userData['POINTS'] = totalPoints
    return jsonify(userData)


@app.route('/get-login-people-number', methods=['POST'])
def getLoginPeopleNumber():
    userData = request.get_json()
    peopleNumber = userData['peopleNumber']
    loginEmail = userData['email']
    #取得人數
    resultData = collectLoginPeople.find_one({}, {'_id': False})
    if(resultData['PEOPLE'] >= peopleNumber and loginEmail != 'clay.lin'):
        return jsonify(False)
    else:
        collectLoginPeople.update_one(
            {}, {"$set": {'PEOPLE': resultData['PEOPLE'] + 1}})
        return jsonify(True)

@app.route('/get-login-people', methods=['POST'])
def getLoginPeople():
    #取得人數
    resultData = collectLoginPeople.find_one({}, {'_id': False})
    return jsonify(resultData['PEOPLE'])

@app.route('/index/<email>')
def index(email):
    userData = collectUserInformation.find_one({"EMAIL": email}, {'_id': False})
    return render_template('index.html', email=email, points=userData['POINTS'], imgUrl=userData['IMG_URL'])


@app.route('/display-ranking')
def displayRanking():
    return render_template('display-ranking.html')

@app.route('/get-ranking-data', methods=['POST'])
def getRankingData():
    userDatas = collectUserInformation.find({}).sort('POINTS', -1).limit(10)
    return DataProcessService.multipleDataPopId(userDatas)


# @app.route('/get-click-points/<points>/<userName>/<email>')
# def getClickPoints(points, userName, email):
#     return render_template('get-click-points.html', points=points, userName=userName, email=email)


@app.route('/get-click-points/<points>/<email>')
def getClickPoints(points, email):
    return render_template('get-click-points.html', points=points, email=email)


# @app.route('/exchange-item/<userName>/<email>')
# def exchangeItem(userName, email):
#     userData = collectUserInformation.find_one(
#         {'USER_NAME': userName, "EMAIL": email}, {'_id': False})
#     return render_template('exchange-item.html', userName=userName, email=email, totalPoints=userData['POINTS'])

@app.route('/exchange-item/<email>/<showModal>')
def exchangeItem(email, showModal):
    defaultImgUrl = 'img/ibmerLogo.png'
    userData = collectUserInformation.find_one({"EMAIL": email}, {'_id': False})
    if(userData is None):
        userData = {"IMG_URL": defaultImgUrl, "POINTS": 0, "EMAIL": email}
        collectUserInformation.insert_one(userData)
    return render_template('exchange-item.html', email=email, imgUrl=userData['IMG_URL'], totalPoints=userData['POINTS'], showModal=showModal)


@app.route('/clear-points', methods=['POST'])
def clearPoints():
    collectUserInformation.update_many({},
        {'$set': {
            "POINTS": 0
        }}, upsert=True)
    return jsonify('success')


@app.route('/clear-login-people', methods=['POST'])
def clearLoginPeople():
    collectLoginPeople.update_one(
        {}, {"$set": {'PEOPLE': 0}})
    return jsonify('success')

if __name__ == '__main__':
    app.run(debug=True)
