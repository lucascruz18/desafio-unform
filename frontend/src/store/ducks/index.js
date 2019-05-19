import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../../routes/history";

import auth from "./auth";
import signup from "./signup";

const reducers = combineReducers({
  router: connectRouter(history),
  auth,
  signup
});

export default reducers;
