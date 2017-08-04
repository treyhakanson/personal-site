import { createStore, applyMiddleware } from 'redux';
import reducers from 'redux-config/reducers';

export default applyMiddleware(
	// add middleware here
)(createStore)(reducers);
