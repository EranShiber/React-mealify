import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    render() {
        
        const newTo = {
            pathname: 'likes',
            state: this.props.userLikes
        }
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
                                <NavLink to="/">LOGO</NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to={newTo}>Likes</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Contact</NavLink>
                        </li>
                    </ul>
                </header>
            </nav>
        )
    }
}
export default Nav