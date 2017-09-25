// external modules
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// custom modules
import NotFound from 'containers/NotFound';
import HomePage from 'containers/HomePage';
import Projects from 'containers/Projects';
import Blog from 'containers/Blog';
import BlogPost from 'containers/BlogPost';
import Project from 'containers/Project';
import StyleGuide from 'components/StyleGuide';

export default (
	<Route path="/">
		<IndexRoute component={HomePage} />
		<Route path="style-guide" component={StyleGuide} />
		<Route path="blog">
			<IndexRoute component={Blog} />
			<Route path=":blogTitle" component={BlogPost}/>
		</Route>
		<Route path="projects">
			<IndexRoute component={Projects} />
			<Route path=":projectTitle" component={Project} />
		</Route>
		<Route path="*" component={NotFound} />
	</Route>
);
