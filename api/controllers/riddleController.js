'use strict';

const mongoose = require('mongoose');

const Riddle = mongoose.model('Riddle');

exports.createRiddle = function(req, res) {
    const riddle = new Riddle(req.body);

    riddle.save(function(err, riddle) {
        err
            ? res.send(err)
            : res.json(riddle);
    })
}

exports.getRiddles = function(req, res) {
    Riddle.find({}, function(err, riddles) {
        err
            ? res.send(err)
            : res.json(riddles);
    })
}