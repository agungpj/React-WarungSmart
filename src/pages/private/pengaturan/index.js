import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Pengguna from "./pengguna";
import Toko from "./toko";

const Pengaturan = () => {
  return (
    <Switch>
      <Route path='/pengaturan/pengguna'>
        <Pengguna />
      </Route>
      <Route path='/pengaturan/toko'>
        <Toko />
      </Route>
    </Switch>
  );
};

export default Pengaturan;
