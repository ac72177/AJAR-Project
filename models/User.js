const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  auth: {
    type: String,
    required: true,
  },
  name_first: {
    type: String,
    required: true,
  },
  name_last: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
