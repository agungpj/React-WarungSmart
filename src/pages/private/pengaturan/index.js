import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Pengguna from "./pengguna";

//halaman induk pengaturan

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
      <Redirect to='/pengaturan/pengguna' />
      {/* redirect untuk mencegah direct halaman tidak diinginkan */}
    </Switch>
  );
};

export default Pengaturan;
