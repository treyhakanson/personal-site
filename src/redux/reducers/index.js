import { combineReducers } from 'redux';

// ### IMPORTANT ###
// this is an example reducer to allow the app
// to create a redux store successfully. Remove
// once your own reducers have been added.
const tmp = () => {
	return {
		action: null,
		payload: null
	}
}

const rootReducer = combineReducers({
	// insert reducers here
	tmp
});

export default rootReducer;