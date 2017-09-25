'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    // Only add dev routes it in dev environment
    if (process.env.NODE_ENV != 'development') return;
    app.use(require('morgan')('tiny'));
    app.get('/api/v' + API_INFO.VERSION + '/dev/hello-world', helloWorld);
};

var _constants = require('../../constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pull off required shared constants
var API_INFO = _constants2.default.API_INFO; // custom modules

function helloWorld(req, res) {
    res.send('Hello World!');
}