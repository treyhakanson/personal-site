'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    app.get('/api/v' + API_INFO.VERSION + '/recommendations/get-top-recommendations', getTopRecommendations);
    app.get('/api/v' + API_INFO.VERSION + '/recommendations/', getRecommendations);
};

var _constants = require('../../constants.js');

var _constants2 = _interopRequireDefault(_constants);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pull off required shared constants
// custom modules
var API_INFO = _constants2.default.API_INFO,
    RECOMMENDATION = _constants2.default.RECOMMENDATION;


function getTopRecommendations(req, res) {
    _db2.default.query('\n        SELECT id,\n               tm AS date,\n               title,\n               link,\n               thumbnail\n            FROM recommendations\n            ORDER BY tm DESC\n        LIMIT 4;\n    ', []).then(function (_ref) {
        var rows = _ref.rows;

        res.json(rows);
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
    });
}

function getRecommendations(req, res) {
    var _req$query$page = req.query.page,
        page = _req$query$page === undefined ? 0 : _req$query$page;

    _db2.default.query('\n      SELECT id,\n             tm AS date,\n             title,\n             link,\n             thumbnail\n          FROM recommendations\n      LIMIT $1 OFFSET $2;\n   ', [RECOMMENDATION.RECOMMENDATIONS_PER_PAGE, RECOMMENDATION.RECOMMENDATIONS_PER_PAGE * page]).then(function (_ref2) {
        var _ref2$rows = _ref2.rows,
            rows = _ref2$rows === undefined ? [] : _ref2$rows;

        res.json(rows);
    }).catch(function (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
    });
}

;