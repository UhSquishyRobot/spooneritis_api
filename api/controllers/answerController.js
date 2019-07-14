'use strict';

const mongoose = require('mongoose');

const Answer = mongoose.model('Answer');

exports.createAnswer = function(req, res) {
    const answer = new Answer(req.body);

    answer.save(function(err, answer) {
        err
            ? res.send(err)
            : res.json(answer);
    });
}