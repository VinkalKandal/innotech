import React from 'react';
import './App.css';
import './styles/index.scss';
import { Provider } from 'react-redux';
import Home from "./pages/Home.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Adbeta from "./pages/ad-beta.js";
import About from "./pages/about.js";
import Cookie_Policy from "./pages/cookie-policy.js";
import Privacy_Policy from "./pages/privacy-policy.js";
import User_Agreement from "./pages/user-agreement.js";
import ForgotPassword from "./pages/ForgotPassword.js";
import ResetPassword from "./pages/ResetPassword.js";
import Charts from "./pages/Charts.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import configureStore from "./appRedux/store";


export const store = configureStore();

function App() {
  return (
    <div className="App">
      <div key="page" className="page-content">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
            <Switch>
              <Route exact path="/signup" component={Signup} />
            </Switch>
            <Switch>
              <Route exact path="/ad-beta" component={Adbeta} />
            </Switch>
            <Switch>
              <Route exact path="/about" component={About} />
            </Switch>
            <Switch>
              <Route exact path="/ForgotPassword" component={ForgotPassword} />
            </Switch>
            <Switch>
              <Route exact path="/ResetPassword" component={ResetPassword} />
            </Switch>
            <Switch>
              <Route exact path="/cookie-policy" component={Cookie_Policy} />
            </Switch>
            <Switch>
              <Route exact path="/privacy-policy" component={Privacy_Policy} />
            </Switch>
            <Switch>
              <Route exact path="/user-agreement" component={User_Agreement} />
            </Switch>
            <Switch>
              <Route exact path="/charts" component={Charts} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>

    </div>
  );
}

export default App;
