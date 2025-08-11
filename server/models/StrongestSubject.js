// models/StrongestSubject.js
/*const mongoose = require('mongoose');

const strongestSubjectSchema = new mongoose.Schema({
  subject: String,
  suggestions: [String]
});

module.exports = mongoose.model('StrongestSubject', strongestSubjectSchema, 'strongest_subject');
*/

const mongoose = require('mongoose');

const strongestSubjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  suggestions: {
    type: [String], // Array of strings
    required: true
  }
});

module.exports = mongoose.model('StrongestSubject', strongestSubjectSchema, 'strongest_subject');
