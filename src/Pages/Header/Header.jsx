import React from 'react';
import './Header.css'
import {BrowserRouter as Router, Link, Route,NavLink, Switch} from 'react-router-dom'


class Header extends React.Component {

    render()
    {
        return(
            <div className="container-fluid p-0" >
                <div className="top-bar p-2">
                    topbar
                </div>
                <div className="container-fluid p-0 menu-bar">
                    <div className="container menus">
                    
                    <NavLink exact activeClassName="active" to="/"> Home</NavLink>
                    <NavLink activeClassName="active" to="/about"> About</NavLink>
                    <NavLink activeClassName="active" to="/service"> Service</NavLink>
                
                    </div>
                </div>
            </div>

        )
    }
}

export default Header;