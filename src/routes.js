// external modules
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// custom modules
import NotFound from 'containers/NotFound';
import HomePage from 'containers/HomePage';
import Blog from 'containers/Blog';
import BlogPost from 'containers/BlogPost';
import StyleGuide from 'components/StyleGuide';

export default (
	<Route path="/">
		<IndexRoute component={HomePage} />
		<Route path="style-guide" component={StyleGuide} />
		<Route path="blog">
			<IndexRoute component={Blog} />
			<Route path=":blogTitle" component={BlogPost} />
		</Route>
		<Route path="*" component={NotFound} />
	</Route>
);
