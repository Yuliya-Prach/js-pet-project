import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import './index.css';
import Home from './Pages/HomePage';
import {LoginPage} from './Pages/LoginPage';
import {AccountPage} from './Pages/AccountPage';
import AuthorizationService from './Services/AuthorizationService';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthorizationService.isAuthorized()
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
);

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/account" component={AccountPage} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
