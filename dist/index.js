'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dev = require('./utils/dev');

var _dev2 = _interopRequireDefault(_dev);

var _projectRoutes = require('./routes/project-routes');

var _projectRoutes2 = _interopRequireDefault(_projectRoutes);

var _blogRoutes = require('./routes/blog-routes');

var _blogRoutes2 = _interopRequireDefault(_blogRoutes);

var _contactFormRoutes = require('./routes/contact-form-routes');

var _contactFormRoutes2 = _interopRequireDefault(_contactFormRoutes);

var _constants = require('../constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pulling off required shared constants
// external modules
var API_INFO = _constants2.default.API_INFO;

// custom modules

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.set('views', _path2.default.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use('/public', _express2.default.static(_path2.default.join(__dirname, '../public')));

(0, _dev2.default)(app);
(0, _projectRoutes2.default)(app);
(0, _blogRoutes2.default)(app);
(0, _contactFormRoutes2.default)(app);

var port = 8081; // dev port
if (process.env.NODE_ENV != 'development') {
	port = 80; // prod port
	app.get('*', function (req, res) {
		res.render('index');
	});
}

var server = app.listen(port, function () {
	console.log('Server started on: ' + port);
});