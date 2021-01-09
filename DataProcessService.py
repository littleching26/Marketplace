# -*-encoding:utf8-*-
# -*- coding: utf-8 -*-
from flask import jsonify

# 處理資料以json形式回傳
class DataProcessService:
    def multipleDataPopId(datas):
        outputDatas = []
        for data in datas:
            data.pop('_id')
            outputDatas.append(data)
        return jsonify(outputDatas)

    def singleDataPopId(data):
        data = data.pop('_id')
        return jsonify(data)
