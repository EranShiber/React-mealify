import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <nav className="main-nav">
                <header className="main-header">
                    <ul>
                        <li>
                            <button className="main-icon">
                                <div className="icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                            <div className="logo">
                                <a href="#">LOGO</a>
                            </div>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </header>
            </nav>
        )
    }
}
export default Nav