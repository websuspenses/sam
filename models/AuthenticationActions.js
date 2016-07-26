module.exports = function(app,mongoose,connection){
    var Schema = mongoose.Schema;
    var ExtraInfo = new Schema({});
    var ActionInfo = new Schema({
    });
    var ContextualInfo = new Schema({
    });
    var ActionLibraryResult = new Schema({
    });
    var ActionResponse = new Schema({
    });
    var Status = new Schema({
    });
    var FollowUpActions = new Schema({
        ActionType: String,
        ActionInfo: [ActionInfo],
        ContextualInfo: [ContextualInfo],
        ExtraInfo: ExtraInfo,
        ActionLibraryResult: ActionLibraryResult,
        ActionResponse: ActionResponse,
        RequestReferenceId: Schema.Types.ObjectId,
        CreatedOn: {type: Date, default: Date.now},
    });
    var Touch = new Schema({
        x: String,
        y: String,
        time: String,
        size: String,
        majorAxis: String,
        minorAxis: String,
        pressure: String
    });
    var Accel = new Schema({
        x: String,
        y: String,
        z: String,
        time: String,
        accuracy: String,
    });
    var Accel_Uncal = new Schema({
        x: String,
        y: String,
        z: String,
        time: String,
        accuracy: String,
    });
    var Gyro = new Schema({
        x: String,
        y: String,
        z: String,
        time: String,
        accuracy: String,
    });
    var Gyro_Uncal = new Schema({
        x: String,
        y: String,
        z: String,
        time: String,
        accuracy: String,
    });
    var Orientation = new Schema({
        x: String,
        y: String,
        z: String,
        time: String,
        accuracy: String,
    });
    var Orientation_Uncal = new Schema({
        x: String,
        y: String,
        z: String,
        time: String,
        accuracy: String,
    });
    var Swipes = new Schema({
        Touch: [Touch],
        Accel: [Accel],
        Accel_Uncal: [Accel_Uncal],
        Gyro: [Gyro],
        Gyro_Uncal: [Gyro_Uncal],
        Orientation: [Orientation],
        Orientation_Uncal: [Orientation_Uncal],
        StartTime: String,
        EndTime: String,
        ViewHeight: String,
        ViewWidth: String,
        Proximity: String
    });
    var Gravity = new Schema({
        x: String,
        y: String,
        z: String,
        time: String,
        accuracy: String,
    });
    var Taps = new Schema({
        Touch: [Touch],
        Accel: [Accel],
        Accel_Uncal: [Accel_Uncal],
        Gyro: [Gyro],
        Gyro_Uncal: [Gyro_Uncal],
        Orientation: [Orientation],
        Orientation_Uncal: [Orientation_Uncal],
        Gravity: [Gravity],
        SeqNo: String,
        ViewName: String,
        ViewHeight: String,
        ViewWidth: String,
        ViewX: String,
        ViewY: String,
        StartTime: String,
        EndTime: String,
        Proximity: String,
        RelativeHumidity: String,
        StepCounter: [],
        Temperature: String

    });
    var AuthenticationActions = new Schema({
        ProfileId: Schema.Types.ObjectId,
        SessionId: String,
        ActionType: String,
        ActionInfo: [ActionInfo],
        ContextualInfo: [ContextualInfo],
        ExtraInfo: ExtraInfo,
        ActionLibraryResult: ActionLibraryResult,
        ActionResponse: ActionResponse,
        Status: Status,
        RequestReferenceId: Schema.Types.ObjectId,
        ActionStartTime: {type: Date, default: Date.now},
        DeviceInfo: Schema.Types.ObjectId,
        FollowUpActions: [FollowUpActions],
        Swipes: [Swipes],
        Taps: [Taps]
    });

    var Authentications = mongoose.model('AuthenticationActions', AuthenticationActions);
}


