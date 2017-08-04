// third-party modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// custom modules
import routes from 'routes';
import store from 'store';

// styles
require('style!css!sass!stylesheet');


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);