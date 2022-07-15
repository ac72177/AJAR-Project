const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    "auth": {
        type: String,
        required: true
    },
    "name_first": {
        type: String,
        required: true
    },
    "name_last": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    // TODO @Andrew
    "password": {
        type: String,
        required: true
    },
    "register_date": {
        type: Date,
    },
    "email": {
        type: String,
        required: true
    },
    // TODO @Jun
    // Arr of ids of parent plans
    "plans": {
        type: Array,
        default: []
    }
});

module.exports = User = mongoose.model('user', UserSchema);