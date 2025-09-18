const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ["Classroom", "Lab"],
    required: true
  }
});

module.exports = mongoose.model('Location', locationSchema);
