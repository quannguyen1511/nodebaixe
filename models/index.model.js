var mongoose = require("mongoose");

var Schema = mongoose.Schema; //dinh nghia 1 kieu cau truc cho mongo

var indexSchema = new Schema({
  col: {
    type: Number,
    required: true
  },
  row: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  rentedDate: {
    type: Date,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  renter: {
    type: String,
    required: true
  },
  carNumber: {
    type: String,
    required: true
  },
  companyName: {
    type: String
  }
});

var Index = mongoose.model("index", indexSchema);
module.exports = Index;
