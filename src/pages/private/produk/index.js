import React from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "./grid";
import EditProduk from "./edit";

const Produk = () => {
  return (
    <Switch>
      <Route path='/produk/edit/:produkId'>
        <EditProduk />
      </Route>
      <Route path=''>
        <Grid />
      </Route>
    </Switch>
  );
};

export default Produk;
