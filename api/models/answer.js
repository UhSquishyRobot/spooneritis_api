'use strict';

const mongoose = require('mongoose');

const AnswerSchema = new Schema({
    riddle: {
        type: Schema.Types.ObjectId,
        ref: 'Riddle',
        required: true
    },
    solver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Answer', AnswerSchema)