// external modules
import express from 'express';
import path from 'path';

const app = express();

const port = process.env.PORT || 8000;
var server = app.listen(port, () => {
	console.log(`Server started on: ${port}`);
});
