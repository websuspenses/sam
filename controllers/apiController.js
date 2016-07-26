var apiController = {};
apiController.index = function(req, res, next) {
    res.send({"response-code": 0,"requestHeader":req.headers,"reqBody":req.body,"CurrentUser":req.CurrentUser});

}
apiController.createProfile = function(req, res, next) {
    res.status(201).send({"responseCode": 0, "errors": [], "responseData": {}});
}

apiController.checkSwipe = function(req, res, next) {
    res.status(200).send({"responseCode": 0, "errors": [], "responseData": {}});
}

apiController.reportAction = function(req, res, next) {
    res.status(200).send({"responseCode": 0, "errors": [], "responseData": {}});
}
module.exports = apiController;
