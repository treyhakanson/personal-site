// external modules
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// custom modules
import devRoutes from './routes/dev-routes';
import contactFormRoutes from './routes/contact-form-routes';
import SHARED_CONSTANTS from '../constants.js';

// pulling off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

const app = express();
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, '../public')));

devRoutes(app);
contactFormRoutes(app);

var server = app.listen(API_INFO.PORT, () => {
	console.log(`Server started on: ${API_INFO.PORT}`);
});
