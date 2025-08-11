const mongoose = require('mongoose');

const electivesSchema = new mongoose.Schema({
  elective: {
    type: String,
    required: true,
    unique: true
  },
  suggestions: [String], // Array of strings
});

module.exports = mongoose.model('Electives', electivesSchema, 'electives');