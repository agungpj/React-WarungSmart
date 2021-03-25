import React from "react";
import { Route, Switch } from "react-router-dom";
import Pengaturan from "./pengaturan";
import Produk from "./produk";
import Transaksi from "./transaksi";

//halaman induk private

const Private = () => {
  return (
    <Switch>
      <Route path='/pengaturan'>
        <Pengaturan />
      </Route>
      <Route path='/produk'>
        <Produk />
      </Route>
      <Route path='/transaksi'>
        <Transaksi />
      </Route>
    </Switch>
  );
};

export default Private;
