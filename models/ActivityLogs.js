module.exports = function(app,mongoose,connection){
    var Schema = mongoose.Schema;
    var ActivityLogs = new Schema({
        CreatedOn: {type: Date, default: Date.now},
        type: String,
        IP_Address: String,
        Header: String,
        Body: String,
        StatusCode: Number
    });
    var Activities = mongoose.model('ActivityLogs', ActivityLogs);
}

