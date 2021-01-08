# -*-encoding:utf8-*-
# -*- coding: utf-8 -*-
from flask import jsonify

# 處理資料以json形式回傳
class DataProcessService:
    def multipleDataPopId(datas):
        output = {}
        i = 0
        for data in datas:
            output[i] = data
            output[i].pop('_id')
            i += 1
        return jsonify(output)

    def singleDataPopId(data):
        print('--display back data--', data)
        data = data.pop('_id')
        return jsonify(data)
