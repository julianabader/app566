var mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});
module.exports.schema = schema;
module.exports.model = mongoose.model('Activity', schema);
