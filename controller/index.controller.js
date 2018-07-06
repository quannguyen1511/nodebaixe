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

function updateIndex(request) {
  return new Promise((resolve, reject) => {
    Index.findOne({ col: request.col, row: request.row }).exec(
      (err, indexModel) => {
        if (err) {
          reject(err);
        } else {
          if (!indexModel) {
            reject({
              statusCode: 404,
              message: message.ERROR_MESSAGE.INDEX.NOT_FOUND
            });
          } else {
            indexModel.companyName = request.companyName
              ? request.companyName
              : indexModel.companyName;
            indexModel.status = request.status;
            indexModel.rentedDate = request.rentedDate
              ? request.rentedDate
              : indexModel.rentedDate;
            indexModel.expirationDate = request.expirationDate
              ? request.expirationDate
              : indexModelexpirationDate;
            indexModel.renter = request.renter
              ? request.renter
              : indexModel.renter;
            indexModel.carNumber = request.carNumber
              ? request.carNumber
              : indexModel.carNumber;
            indexModel.save((err, response) => {
              if (err) reject(err);
              else {
                resolve(response);
              }
            });
          }
        }
      }
    );
  });
}
