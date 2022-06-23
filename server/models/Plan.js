const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlanSchema = new Schema({
    "_id": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "labels": {
        type: Array,
    },
    "startDate": {
        type: Date,
        default: Date.now
    },
    "dueDate": {
        type: Date
    },
    "isComplete": {
        type: Boolean,
        default: false
    },
    "description": {
        type: String
    },
    "belongsTo": {
        type: String,
        required: true
    },
    "attachments": {
        type: Array
    },
    "plans": {
        type: Array
    }
});

module.exports = Plan = mongoose.model('plan', PlanSchema);