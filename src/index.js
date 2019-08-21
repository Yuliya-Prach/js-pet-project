import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Home from './Pages/HomePage';
import {LoginPage} from './Pages/LoginPage';
import {AccountPage} from './Pages/AccountPage';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/account" component={AccountPage} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
