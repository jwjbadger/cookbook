const mongoose = require('mongoose');

const BodySegment = mongoose.Schema({
  title: String,
  body: String,
});

module.exports = BodySegment;
