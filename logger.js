const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ]
});

function logMiddleware(req, res, next) {
    logger.info({ message: `${req.method} ${req.url}`, timestamp: new Date().toISOString() });
    next();
}

module.exports = logMiddleware;
