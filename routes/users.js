var express = require('express'),
    router = express.Router();
router.get('/', function(req, res, next) {
    res.status(200).send({"responseCode": 0, "errors": [], "responseData": {}});
});

module.exports = function(app){
  app.use('/users', router);
};
