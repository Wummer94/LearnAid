var express = require('express')
var bodyParser = require('body-parser')

var database = require('./libs/database/mysql.js')
database.connectDatabase();


var topic = require('./services/topic.service/topic.service.route');
var easyCard = require('./services/easyCard.service/easyCard.service.route')
console.log(topic);

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store');
    res.setHeader('pragma', 'no-cache');
    next();
})


topic.import(app, database);
easyCard.import(app, database);



app.listen(3000)

