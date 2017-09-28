'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    app.post('/api/v' + API_INFO.VERSION + '/contact-form/submit', submitContactForm);
};

var _constants = require('../../constants');

var _constants2 = _interopRequireDefault(_constants);

var _cleaning = require('../utils/cleaning');

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pull off required shared constants
var API_INFO = _constants2.default.API_INFO; // custom modules

function submitContactForm(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        email = _req$body.email,
        message = _req$body.message;


    if (!name || !(0, _cleaning.validateEmail)(email) || !message) {
        res.json({ success: false });
    } else {
        _db2.default.query('\n            INSERT INTO contact_form (\n                name, email, message\n            ) VALUES (\n                $1, $2, $3\n            );\n        ', [name, email, message]).then(function () {
            res.json({ success: true });
        }).catch(function (err) {
            console.log(err);
            res.json({ success: false });
        });
    }
}

;