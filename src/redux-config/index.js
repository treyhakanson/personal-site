import { createStore, applyMiddleware } from "redux";
import reducers from "redux-config/reducers";

export default applyMiddleware()(createStore)(reducers);
// add middleware here
