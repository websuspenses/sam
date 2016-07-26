module.exports = function(app,mongoose,connection){
    var Developers = mongoose.model('DeveloperAccounts');
    // var Developer = new Developers({
    //     Name: "Jyotirmayee Dalei",
    //     ContactInfo: {"Mobile":"9776478033"},
    //     SubscriptionInfo: {"Date":Date.now()},
    //     Applications: [
    //         {
    //             Name: "App1",
    //             Status: true,
    //             Package_id: "123456",
    //             SDK_APP_ID: "1234567890",
    //             HASH_SALT: "abcdefghijkl",
    //             ExtraInfo: {"Extra":"data"}
    //         }
    //     ]
    // });
    // Developer.save(function (err, Developer) {
    //     if (err) return console.error(err);
    //     console.log('success');
    // });
    //
    //
    // Developers.find({"Name":/Samir/},function (err, docs){ //THIS IS WHAT'S FAILING
    //     console.log(err);
    //     console.log(docs);
    // });
}

