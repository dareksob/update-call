const errorEnd = require('./error-end');

module.exports = function required(value, errorMessage) {
  if (Array.isArray(value) && value.length < 1) {
    errorEnd(errorMessage);
  }
  else if (typeof value === 'string' && !value) {
    errorEnd(errorMessage);
  }
};