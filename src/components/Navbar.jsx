import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export function Navbar () {
    return (
        <div className='navContainer'>
            <div className='titleContainer'>
                <img className='logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Hoard Logo (circle)" border="0" />
                <Link className='homeLink' to={'/'}><h1>Cosplay Radar</h1></Link>
            </div>
            <div className='linkContainer'>
                <Link className='navLink' to={'/'}>Upcoming Conventions</Link>
                <Link className='navLink' to={'/characters'}>Most Popular Characters</Link>
                <Link className='navLink' to={'/about'}>About</Link>
            </div>
        </div>

    )
}
