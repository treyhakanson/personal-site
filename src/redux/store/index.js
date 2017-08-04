import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk';

import reducers from 'reducers';

export default applyMiddleware(
	// add your middleware here
	ReduxPromise,
	ReduxThunk
)(createStore)(reducers);