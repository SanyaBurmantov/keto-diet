import React from 'react';
import {Link} from "react-router";

const Header = () => {
    return (
        <header className="App-header">
            <Link to="/" className="nav-button">
                На главную
            </Link>
            <h1>Кето-диета</h1>
            <nav className="header-buttons">
            <Link to="/menus" className="nav-button">
                В меню
            </Link>
            </nav>
        </header>
    );
};

export default Header;