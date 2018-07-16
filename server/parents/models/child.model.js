const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  image: String,
  age: Number,
  preferences: {
    type: String,
    percent: Number
  }}, { _id: false });
module.exports.schema = schema;
module.exports.model = mongoose.model('Child', schema);