const logger = require('../utils/logger');

const requestLogger = async (req) => {
  logger.info('Incoming request', {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    header: req.headers,
  });
};

module.exports = requestLogger;
