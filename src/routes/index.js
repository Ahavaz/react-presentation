import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/home";
import Catalogs from "../pages/catalogs";
import NotFound from "../pages/notFound";

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/catalogs" component={Catalogs} />
    <Route exact path="/catalogs/:catalogId" component={Catalogs} />

    <Redirect from="/" exact to="/home" />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
