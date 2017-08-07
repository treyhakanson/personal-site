// external modules
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// custom modules
import HomePage from 'containers/HomePage';
import StyleGuide from 'components/StyleGuide';

export default (
	<Route path="/">
		<IndexRoute component={HomePage} />
		<Route path="style-guide" component={StyleGuide} />
	</Route>
);
