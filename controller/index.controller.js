var Index = require("./../models/index.model");
var message = require("./../utils/message");

module.exports = {
  getAllIndex: getAllIndex,
  getIndex: getIndex,
  updateIndex: updateIndex
};

function getAllIndex() {
  return new Promise((resolve, reject) => {
    Index.find({}).exec(function(err, indexes) {
      if (err) {
        reject(err);
      } else {
        resolve(indexes);
      }
    });
  });
}

function getIndex(request) {
  return new Promise((resolve, reject) => {
    Index.findOne({
      col: request.col,
      row: request.row
    }).exec(function(err, indexModel) {
      if (err) {
        reject(err);
      } else {
        if (!indexModel) {
          reject({
            statusCode: 404,
            message: message.ERROR_MESSAGE.INDEX.NOT_FOUND
          });
        } else {
          resolve(indexModel);
        }
      }
    });
  });
}

function updateIndex() {}
