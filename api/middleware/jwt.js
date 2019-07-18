const expressJwt = require('express-jwt');
const key = process.env.JWT_SECRET;

const config = 
{
    "secret": key
}


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