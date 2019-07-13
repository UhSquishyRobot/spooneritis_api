'use strict';

const userController = require('../controllers/userController');

const registerRoutes = function(app) {
    app.route('/users')
        .post(userController.createUser)

    app.route('/users/:userId')
        .get(userController.getUser)
}

module.exports = registerRoutes;