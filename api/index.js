// external modules
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// custom modules
import dev from './utils/dev';
import projectRoutes from './routes/project-routes';
import blogRoutes from './routes/blog-routes';
import contactFormRoutes from './routes/contact-form-routes';
import SHARED_CONSTANTS from '../constants.js';

// pulling off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

const app = express();
app.use(bodyParser.json());
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, '../public')));

dev(app);
projectRoutes(app);
blogRoutes(app);
contactFormRoutes(app);

if (process.env.NODE_ENV != 'development') {
	app.get('*', (req, res) => {
		res.render('index');
	});
}

var server = app.listen(API_INFO.PORT, () => {
	console.log(`Server started on: ${API_INFO.PORT}`);
});
