const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  suggestions: {
    type: [String], // Array of strings
    required: true
  }
});

module.exports = mongoose.model('Discipline', disciplineSchema, 'discipline');
