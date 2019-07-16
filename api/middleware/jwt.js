const expressJwt = require('express-jwt');
const config = require('../../config.json');

function jwt() {
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [
            '/users/authenticate',
            { url: '/users', methods: ['POST'] }
        ]
    })
}

module.exports = jwt;