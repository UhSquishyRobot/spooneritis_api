'use strict';

const mongoose = require('mongoose');

const Riddle = mongoose.model('Riddle');

exports.createRiddle = function(req, res) {
    const content = {
        answer: req.body.answer.split(','),
        description: req.body.description,
        author: req.body.author
    }
    
    const riddle = new Riddle(content);

    riddle.save(function(err, riddle) {
        err
            ? res.send(err)
            : res.json(riddle);
    })
}