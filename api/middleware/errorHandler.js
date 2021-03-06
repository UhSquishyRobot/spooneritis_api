function errorHandler(err, req, res, next) {
    if (err) {
        if (typeof (err) === 'string') {
            return res.status(err.status).json({ message: err })
        }
    
        if (err.name === 'UnauthorizedError') {
            return res.status(401).json({ message: 'Invalid Token' });
        }
    
        return res.status(500).json({ message: err.message });
    }
}

module.exports = errorHandler;