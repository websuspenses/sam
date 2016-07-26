var express = require('express'),
        mongoose = require('mongoose'), //mongo connection
        promise = require('promise'),
        _ = require('underscore');
//mongoose.set('debug', true);
var AuthHelper = {}
AuthHelper.Developers = mongoose.model('DeveloperAccounts');
AuthHelper.IsUserValid = function (AppId, AppKey) {
    return new Promise(function (fulfill, reject) {
        AuthHelper.Developers.find({"Applications.SDK_APP_ID": AppId, "Applications.HASH_SALT": AppKey}, function (err, docs) {
            if (err)
                reject(err);
            else if (_.isEmpty(docs))
                fulfill(false);
            else
                fulfill(docs);
        });
    });
};

exports.AuthHelper = AuthHelper;