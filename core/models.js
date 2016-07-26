var fs = require('fs');
var mongoose = require('mongoose');
var config = require('./config');
var options = {
    db: { native_parser: true },
    server: { poolSize: 5 },
//    replset: { rs_name: 'myReplicaSetName' },
    user: config.mongodb.username,
    pass: config.mongodb.password
}
var databasePort = "";
if(config.mongodb.port != "") databasePort = ":"+config.mongodb.port;
var uri = 'mongodb://'+config.mongodb.host+databasePort+'/'+config.mongodb.database;
var connection = mongoose.connect(uri, options);
// var connection = mongoose.connect('mongodb://localhost:27017/zighra');

module.exports = function(app){
    fs.readdirSync(__dirname+'/../models/').forEach(function(file) {
        var name = file.substr(0, file.indexOf('.'));
        if(name)
        require('../models/' + name)(app,mongoose,connection);
    });
    fs.readdirSync(__dirname+'/../models/seeds/').forEach(function(file) {
        var name = file.substr(0, file.indexOf('.'));
        if(name)
        require('../models/seeds/' + name)(app,mongoose,connection);
    });
}