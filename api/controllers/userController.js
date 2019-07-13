'use strict';

const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.getUser = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        err
            ? res.send(err)
            : res.json(user);
    })
}

exports.createUser = function(req, res) {
    const user = new User(req.body);

    user.save(function(err, user) {
        err
            ? res.send(err)
            : res.json(user);
    })
}