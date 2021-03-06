const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlanSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  labels: {
    type: Array,
  },
  startDate: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  plans: {
    type: Array,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = Plan = mongoose.model("plan", PlanSchema);
