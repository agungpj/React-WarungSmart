import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/login";
import Registrasi from "./pages/registrasi";
import GlobalStyle from "./components/GlobalStyle";
import Lupapassword from "./pages/lupa-password";
import Notfound from "./pages/404";
import Private from "./pages/private";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Private} />
          {/* ======== PrivateRoute Private  ======== */}
          <PrivateRoute path='/transaksi' component={Private} />

          <PrivateRoute path='/pengaturan' component={Private} />

          <PrivateRoute path='/produk' component={Private} />

          {/* ======== Route Private  ======== */}

          {/* ======== Route Publik  ======== */}
          <Route path='/login' component={Login} />

          <Route path='/registrasi' component={Registrasi} />

          <Route path='/lupa-password' component={Lupapassword} />

          <Route component={Notfound} />

          {/* ======== Route Publik  ======== */}
        </Switch>
      </Router>
    </div>
  );
};
export default App;
