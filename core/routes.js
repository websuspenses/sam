var fs = require('fs');
module.exports = function(app){
    fs.readdirSync(__dirname+'/../routes/').forEach(function(file) {
        var name = file.substr(0, file.indexOf('.'));
        if(name)
        require('../routes/' + name)(app);
    });
}