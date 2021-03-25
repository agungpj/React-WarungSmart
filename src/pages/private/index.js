import React from "react";
import { Route, Switch } from "react-router-dom";
import Pengaturan from "./pengaturan";

const Private = () => {
  return (
    <Switch>
      <Route path='/pengaturan'>
        <Pengaturan />
      </Route>
    </Switch>
  );
};

export default Private;
