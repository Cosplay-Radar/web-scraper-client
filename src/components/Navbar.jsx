import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export function Navbar () {
    return (
        <div className='navContainer'>
            <div className='titleContainer'>
                <Link className='homeLink' to={'/'}><h1>Adventurer's Hoard Researcher</h1></Link>
            </div>
            <div className='linkContainer'>
                <Link className='navLink' to={'/conventions'}>Upcoming conventions</Link>
                <Link className='navLink' to={'/characters'}>Most Popular Characters</Link>
            </div>
        </div>

    )
}
