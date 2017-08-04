// external modules
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// custom modules
import store from 'redux-config';
import routes from 'routes';

export default () => (
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
);
