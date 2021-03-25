import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/login";
import Registrasi from "./pages/registrasi";
import GlobalStyle from "./components/GlobalStyle";
import Lupapassword from "./pages/lupa-password";
import Notfound from "./pages/404";
import Private from "./pages/private";

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />

      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route path='/pengaturan'>
          <Private />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/registrasi'>
          <Registrasi />
        </Route>
        <Route path='/lupa-password'>
          <Lupapassword />
        </Route>
        <Route path=''>
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
