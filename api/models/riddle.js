'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RiddleSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    answer: {
        type: [String],
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Riddle', RiddleSchema)