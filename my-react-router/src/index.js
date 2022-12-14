
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route, Switch  } from 'react-router-dom';
import React from 'react';
const router = function(){
  return(
        <Router>
            <Switch>
              <Route exact  path="/" component={App}/>
              <Route  path="/user" component={User}/>
            </Switch>
        </Router>);
}

ReactDOM.render(router(),document.getElementById('root'));

reportWebVitals();