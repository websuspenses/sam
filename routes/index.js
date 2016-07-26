var express = require('express'),
    router = express.Router();
router.get('/', function(req, res, next) {
    res.render('index', { title: '' });
});

module.exports = function(app){
  /* GET home page. */
  app.use('/', router);
};
