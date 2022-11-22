const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const mongoClient = require('mongodb').MongoClient
const app = express()
app.set('port', process.env.Port || 3000)
app.use(morgan('dev'))

var db;
var databaseUrl="mongodb+srv://admin:1234@cluster0.uzxwi96.mongodb.net/?retryWrites=true&w=majority"

//app.get('/', (req, res) => {
//	res.send("Web Server Started~!!")
//})

app.get('/', (req, res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			db = database.db('test')
			db.collection('user').find({}).toArray(function(err, result){
				if(err) throw err
				console.log('result : ')
				console.log(result)
				res.json(JSON.stringify(result))
			})
		}
	})
});

module.exports = app;
