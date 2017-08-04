import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';

export default applyMiddleware(
	// add middleware here
)(createStore)(reducers);
