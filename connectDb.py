# -*-encoding:utf8-*-
# -*- coding: utf-8 -*-
from flask_pymongo import pymongo
class DBInformation:
    def connetToDb(dbName):
        tmpName = dbName    
        dbStr = "mongodb+srv://YICHING:justtheway402@cluster0.rqaws.mongodb.net/" + tmpName + "?retryWrites=true&w=majority"
        client = pymongo.MongoClient(dbStr)
        db = client.get_database(dbName)
        return db
        # return pymongo.collection.Collection(db, collectionName)

