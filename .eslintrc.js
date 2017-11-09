var silverstripeConfig = require('@silverstripe/webpack-config/.eslintrc');

silverstripeConfig.env = {
    'jasmine': true,
    'browser': true, 
};

module.exports = silverstripeConfig
