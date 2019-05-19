import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";
import { isAuthenticated } from "../services/auth";

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import Profile from "../pages/profile";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
};

PrivateRoute.defaultProps = {
  component: () => {},
  location: {}
};

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <PrivateRoute exact path="/Profile" component={Profile} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
