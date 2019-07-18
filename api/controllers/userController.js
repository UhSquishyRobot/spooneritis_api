'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const key = process.env.JWT_SECRET;

const config = 
{
    "secret": key
}

const User = mongoose.model('User');

exports.getUser = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        err
            ? res.send(err)
            : res.json(user);
    })
}

exports.getUsers = function(req, res) {
    User.find({}, function(err, users) {
        err
            ? res.send(err)
            : res.json(users);
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

exports.authenticate = function(req, res) {
    User.find({ username: req.body.username } , function(err, user) {
        if (err) res.send(err);

        if (user) {
            const token = jwt.sign({ sub: user.id, exp: Date.now() + 604800000 }, config.secret);
            
            res.send({
                user: {
                    id: user.id,
                    username: user.username
                },
                token: token
            })
        }
    });
}