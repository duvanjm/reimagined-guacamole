import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/dash/">
        <Route path="/dash/:name" exact component={App}/>
      </Route>
      <Route path="/login" exact component={Login}/>
      <Route path="/" exact>
        <Redirect from="/" to="/login"/>
      </Route>
      <Route path="/register">
        <Route path="/register" exact component={Register}/>
      </Route>
      <Redirect from="*" to="/404"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
