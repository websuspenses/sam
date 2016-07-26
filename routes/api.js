var mongoose = require('mongoose')
var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'), //used to manipulate POST
    apiController = require('../controllers/apiController'); //used to manipulate POST

var AuthHelper = require('../helpers/authHelper').AuthHelper;
router.use(bodyParser.urlencoded({extended: true}))
router.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers["kinetic-app-id"] && req.headers["kinetic-app-key"] && req.headers["kinetic-app-package-id"];

    // decode token
    if (token) {
        // verifies secret and checks exp
        AuthHelper.IsUserValid(req.headers["kinetic-app-id"],req.headers["kinetic-app-key"])
            .then(function(data){
                if(data != false){
                    req.CurrentUser = data;
                    next();
                }else{
                    return res.status(401).send({
                        success: false,
                        "response-code":1,
                        message: 'Invalid Request data.'
                    });
                }

            });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            "response-code":1,
            message: 'Invalid Request data.'
        });

    }
});

//build the REST operations at the base for blobs
//this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
router.route('/')
    .post(apiController.index);

//create profile route
router.route('/createProfile')
    .post(apiController.createProfile);

//check swipe route

router.route('/checkSwipe')
    .post(apiController.checkSwipe);

//report Action route

router.route('/reportAction')
    .post(apiController.reportAction);

module.exports = function(app){
    app.use('/kinetic-auth-service/api', router);
};
