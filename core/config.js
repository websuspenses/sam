var fs = require('fs');

var conf = {};
var env = process.env.NODE_ENV || "development";
var contents = fs.readFileSync(__dirname+'/../config.json');
var jsonData = JSON.parse(contents);
var json = jsonData[env];
for (o in json) {
            conf[o] = json[o];
        }
conf.port = process.env.PORT || conf.port || 3000;
conf.mongodb.host =  process.env.DB_HOST || conf.mongodb.host || "localhost";
conf.mongodb.port =  process.env.DB_PORT || conf.mongodb.port || "27017";
conf.mongodb.database =  process.env.DB_DATABASE || conf.mongodb.database || "app";
conf.port = process.env.PORT || conf.port || 3000;

module.exports = conf;