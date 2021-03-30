import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import SignIn from "./pages/registrasi/formRegis";

import Lupapassword from "./pages/lupa-password";
import Notfound from "./pages/404";
import Private from "./pages/private";
import PrivateRoute from "./components/PrivateRoute";
// use context firebase.
import FirebaseProvider from "./components/FirebaseProvider";
// material ui baseline.
import CssBaseLine from "@material-ui/core/CssBaseLine";
//import theme provider.
import ThemeProvider from "@material-ui/styles/ThemeProvider";
//import config theme
import theme from "./config/theme";

const App = () => {
  return (
    <div>
      <CssBaseLine>
        <ThemeProvider theme={theme}>
          <FirebaseProvider>
            <Router>
              <Switch>
                <PrivateRoute exact path='/' component={Private} />
                {/* private direct ke login. */}
                {/* ======== PrivateRoute Private  ======== */}
                <PrivateRoute path='/transaksi' component={Private} />

                <PrivateRoute path='/pengaturan' component={Private} />

                <PrivateRoute path='/produk' component={Private} />

                {/* ======== Route Private  ======== */}

                {/* ======== Route Publik  ======== */}

                <Route path='/registrasi' component={SignIn} />

                <Route path='/login' component={Login} />

                <Route path='/lupa-password' component={Lupapassword} />

                <Route component={Notfound} />

                {/* ======== Route Publik  ======== */}
              </Switch>
            </Router>
          </FirebaseProvider>
        </ThemeProvider>
      </CssBaseLine>
    </div>
  );
};
export default App;
