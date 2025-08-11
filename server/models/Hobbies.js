// models/Hobbies.js
/*const mongoose = require('mongoose');

const hobbiesSchema = new mongoose.Schema({
  hobby: String,
  suggestions: [String]
});

module.exports = mongoose.model('Hobbies', hobbiesSchema, 'hobbies');
*/

const mongoose = require('mongoose');

const hobbiesSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  suggestions: {
    type: [String], // Array of strings
    required: true
  }
});

module.exports = mongoose.model('Hobbies', hobbiesSchema, 'hobbies');
