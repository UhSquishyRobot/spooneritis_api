'use strict';

const userController = require('../controllers/userController');
const riddleContoller = require('../controllers/riddleController');

const registerRoutes = function(app) {
    app.route('/users')
        .post(userController.createUser)
        .get(userController.getUsers)

    app.route('/users/:userId')
        .get(userController.getUser)

    app.route('/riddles')
        .post(riddleContoller.createRiddle)
}

module.exports = registerRoutes;