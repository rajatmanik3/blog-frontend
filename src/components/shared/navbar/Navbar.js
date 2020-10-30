import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <a className="brand-logo">Blogging</a>
                <ul className="right">
                    <li><Link to="/">Blogs</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;