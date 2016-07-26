var autoIncrement = require('mongoose-auto-increment');
module.exports = function(app,mongoose,connection){
    var Schema = mongoose.Schema;
    autoIncrement.initialize(connection);
    var ExtraInfo = new Schema({},{ strict: false });
    var Applications = new Schema({
        id: Number,
        Name: String,
        Status: Boolean,
        Package_id: String,
        SDK_APP_ID: String,
        HASH_SALT: String,
        ExtraInfo: ExtraInfo,
        CreatedOn: {type: Date, default: Date.now}
    });
    Applications.plugin(autoIncrement.plugin, {
        model: 'DeveloperAccounts',
        field: 'id',
        startAt: 1,
        incrementBy: 1
    });
    var SubscriptionInfo = new Schema({
    },{ strict: false });
    var ContactInfo = new Schema({
    },{ strict: false });
    var DeveloperAccounts = new Schema({
        Name: String,
        ContactInfo: ContactInfo,
        SubscriptionInfo: SubscriptionInfo,
        Applications: [Applications]
    },{ strict: false });

    var Developers = mongoose.model('DeveloperAccounts', DeveloperAccounts);
}
