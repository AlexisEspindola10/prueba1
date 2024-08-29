import React from 'react';
import './headerStyle.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className="logo">Mi Logo</div>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/history">Historia</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/revistas">Revistas</Link>
            </nav>
        </header>
    );
}