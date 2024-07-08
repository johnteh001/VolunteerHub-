// models/Volunteer.js

const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  skills: [String],
  availability: {
    type: String,
    enum: ['full-time', 'part-time', 'weekends'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
