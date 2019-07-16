'use strict';

const userController = require('../controllers/userController');
const riddleContoller = require('../controllers/riddleController');
const answerController = require('../controllers/answerController');

const registerRoutes = function(app) {
    app.route('/users')
        .post(userController.createUser)
        .get(userController.getUsers)

    app.route('/users/:userId')
        .get(userController.getUser)
        
    app.route('/users/authenticate')
        .post(userController.authenticate)

    app.route('/riddles')
        .post(riddleContoller.createRiddle)
        .get(riddleContoller.getRiddles)

    app.route('/answers')
        .post(answerController.createAnswer)
}

module.exports = registerRoutes;