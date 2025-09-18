const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ["Lecture", "Lab"],
    required: true
  },
  frequency: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Subject', subjectSchema);
