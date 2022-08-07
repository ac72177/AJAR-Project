const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const InviteSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  planId: {
    type: String,
    required: true,
  },
  sender: {
    type: Object,
    required: true,
  }
});

module.exports = Invite = mongoose.model("invite", InviteSchema);
