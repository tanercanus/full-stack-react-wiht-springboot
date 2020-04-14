import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import {withRouter} from 'react-router';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="www.tanerus.com" className="navbar-brand">Taner</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="navbar-link" to="/welcome/taner">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="navbar-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="navbar-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="navbar-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

//Whenever the router is called it has to be reload 
//Without this code, it cannot change
export default withRouter(HeaderComponent);