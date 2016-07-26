var autoIncrement = require('mongoose-auto-increment');
module.exports = function(app,mongoose,connection){
    var Schema = mongoose.Schema;
    autoIncrement.initialize(connection);
    var ExtraInfo = new Schema({});
    var os = new Schema({
        type: String,
        version: String,
        ExtraInfo: ExtraInfo
    });
    var DisplayInfo = new Schema({
    });
    var Sensors = new Schema({
    });
    var DeviceInfo = new Schema({
        id: Number,
        Make: String,
        Model: String,
        OS: os,
        DisplayInfo: DisplayInfo,
        Sensors: [Sensors],
        ExtraInfo: ExtraInfo,
    });
    var Profiles = new Schema({
        id: Number,
        Name: String,
        Status: Boolean,
        ExtraInfo: ExtraInfo,
        CreatedOn: {type: Date, default: Date.now},
        DeviceInfo: DeviceInfo
    });
    Profiles.plugin(autoIncrement.plugin, {
        model: 'Profiles',
        field: 'id',
        startAt: 1,
        incrementBy: 1
    });
    var ContactInfo = new Schema({
    },{ strict: false });
    var UserAccounts = new Schema({
        Name: String,
        ContactInfo: ContactInfo,
        ApplicationId: Schema.Types.ObjectId,
        Status: Boolean,
        ExtraInfo: ExtraInfo,
        CreatedOn: {type: Date, default: Date.now},
        Profiles: [{}]
    });

    var Users = mongoose.model('UserAccounts', UserAccounts);
}
