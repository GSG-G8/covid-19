import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.jpg';
import Awareness from '../../pages/Awareness/Awareness';
import Information from '../../pages/Information/Information';
import Home from '../../pages/Home/Home';
import './style.css'

function Head() {
  return (
    <Router>
      <div className="header">
        <div className="left">
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <div>
          <ul className="right" >
            <li>
              <Link to="/" className="link"> Home </Link>
            </li>
            <li>
              <Link to="/info" className="link"> Information </Link>
            </li>
            <li>
              <Link to="/awareness" className="link"> Awareness </Link>
            </li>
          </ul>
          </div>
          </div>

          <Switch>
            <Route path="/info">
              <Information />
            </Route>
            <Route path="/awareness">
              <Awareness />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      
    </Router>
  );
}

export default Head;
