const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlanSchema = new Schema({
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
    "attachments": {
        type: Array,
        default: []
    },
    // Arr of ids of child plans
    "plans": {
        type: Array,
        default: []
    }
});

module.exports = Plan = mongoose.model('plan', PlanSchema);
