import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home";
export default () => (
  <>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </>
);
