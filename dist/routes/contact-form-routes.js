'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    app.post('/api/v' + API_INFO.VERSION + '/contact-form/submit', submitContactForm);
};

var _constants = require('../../constants.js');

var _constants2 = _interopRequireDefault(_constants);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pull off required shared constants
// custom modules
var API_INFO = _constants2.default.API_INFO;


function submitContactForm(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        email = _req$body.email,
        message = _req$body.message;


    _db2.default.query('\n        INSERT INTO contact_form (\n            name, email, message\n        ) VALUEs (\n            $1, $2, $3\n        );\n    ', [name, email, message]).then(function () {
        res.json({ success: true });
    }).catch(function (err) {
        console.log(err);
        res.json({ success: false });
    });
}

;