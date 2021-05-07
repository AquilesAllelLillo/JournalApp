import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route exact patch="/auth/login" component={LoginScreen} />
        <Route exact patch="/auth/register" component={RegisterScreen} />

        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
};
