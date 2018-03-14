// external modules
import React from "react";
import { Router } from "react-router";
import { Provider } from "react-redux";

// custom modules
import store from "redux-config";
import routes from "routes";

export default ({ history }) => (
   <Provider store={store}>
      <Router history={history} routes={routes} />
   </Provider>
);
