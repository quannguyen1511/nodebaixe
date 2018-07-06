var router = require("express").Router();
var message = require("./../utils/message");
var indexController = require("./../controller/index.controller");

module.exports = () => {
  router.get("/", getAllIndex);
  router.get("/:col/:row", getIndex);
  return router;
};

function getAllIndex(req, res, next) {
  indexController
    .getAllIndex()
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      next(err);
    });
}

function getIndex(req, res, next) {
  var request = {
    col: req.params.col,
    row: req.params.row
  };

  indexController
    .getIndex(request)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      next(err);
    });
}
