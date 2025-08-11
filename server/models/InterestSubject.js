// models/InterestSubject.js
/*const mongoose = require('mongoose');

const interestSubjectSchema = new mongoose.Schema({
  subject: String,
  suggestions: [String]
});

module.exports = mongoose.model('InterestSubject', interestSubjectSchema, 'interest_subject');
*/

// models/InterestSubject.js
const mongoose = require('mongoose');

const interestSubjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  suggestions: {
    type: [String], // Array of strings
    required: true
  }
});

module.exports = mongoose.model('InterestSubject', interestSubjectSchema, 'interest_subject');
