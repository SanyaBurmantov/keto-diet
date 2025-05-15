import React from 'react';
import {Link, Navigate, Outlet, useLocation} from "react-router-dom";

const Menus = () => {
    const location = useLocation();

    const shouldRedirect = location.pathname === '/menus';
    return (
        <div className="App">
            {shouldRedirect && <Navigate to="/menus/recomends" replace />}
            <div className="App-header">
                <h1>🍽 Кето-Меню</h1>
                <div>
                    <Link to="/menus/breakfast" className="nav-button">Завтраки</Link>
                    <Link to="/menus/lunch" className="nav-button">Обеды</Link>
                    <Link to="/menus/dinners" className="nav-button">Ужины</Link>
                </div>
            </div>
            <Outlet />
            <div className="App-header">
                <h1>🍽 Кето-Меню</h1>
                <div>
                    <Link to="/menus/breakfast" className="nav-button">Завтраки</Link>
                    <Link to="/menus/lunch" className="nav-button">Обеды</Link>
                    <Link to="/menus/dinners" className="nav-button">Ужины</Link>
                </div>
            </div>
        </div>
    );
};

export default Menus;