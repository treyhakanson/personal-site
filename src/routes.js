// external modules
import React from 'react';
import { Route } from 'react-router';

// custom modules
import StyleGuide from 'components/StyleGuide';

export default (
	<Route path="/">
		<Route path="style-guide" component={StyleGuide} />
	</Route>
);
