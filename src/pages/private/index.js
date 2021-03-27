import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pengaturan from "./pengaturan";
import Produk from "./produk";
import Transaksi from "./transaksi";
import Home from "./home";

//halaman induk private

const Private = () => {
  return (
    <Router>
      <Switch>
        <Route path='/pengaturan' component={Pengaturan} />
        <Route path='/produk' component={Produk} />
        <Route path='/transaksi' component={Transaksi} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default Private;
