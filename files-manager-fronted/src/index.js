import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './components/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/dash'>
        <Route path='/dash' exact component={App}/>
        </Route>
      <Route path='/login' exact component={Login}/>
      <Route path='/' exact>
        <Redirect from='/' to='/login'/>
      </Route>
      <Redirect from='*' to='/404'/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
