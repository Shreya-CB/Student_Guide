// models/Passion.js
/*const mongoose = require('mongoose');

const passionSchema = new mongoose.Schema({
  passion: String,
  suggestions: [String]
});

module.exports = mongoose.model('Passion', passionSchema, 'passion');
*/

// models/InterestSubject.js
const mongoose = require('mongoose');

const passionSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  suggestions: {
    type: [String], // Array of strings
    required: true
  }
});

module.exports = mongoose.model('Passion', passionSchema, 'passion');
