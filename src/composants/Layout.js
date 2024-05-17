import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, MenuItem } from 'semantic-ui-react';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
    return (
        <div>
            <header>
                <h2>TP2 APP WEB 2</h2>
                <Menu>
                    <MenuItem>
                        <NavLink to='/' end className={({ isActive }) => (isActive ? "lien-active" : "")}
                            style={({ isActive, isPending }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isPending ? "none" : "none"
                            })}>
                            Accueil
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to='/recherche' className={({ isActive }) => (isActive ? "lien-active" : "")}
                            style={({ isActive, isPending }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isPending ? "none" : "none"
                            })}>
                            Barre de Recherche
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to='/pays' className={({ isActive }) => (isActive ? "lien-active" : "")}
                            style={({ isActive, isPending }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isPending ? "none" : "none"
                            })}>
                            PAYS
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to='/region' className={({ isActive }) => (isActive ? "lien-active" : "")}
                            style={({ isActive, isPending }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isPending ? "none" : "none"
                            })}>
                            Recherche par régions
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to='/form' className={({ isActive }) => (isActive ? "lien-active" : "")}
                            style={({ isActive, isPending }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isPending ? "none" : "none"
                            })}>
                            Form
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <ThemeToggle />
                    </MenuItem>
                </Menu>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
