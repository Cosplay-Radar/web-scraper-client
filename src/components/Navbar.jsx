import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';


export function Navbar () {
    return (
        <div className='titleContainer'>
            <h1>Cosplay Market Research</h1>
            <div className='linkContainer'>
                <Link className='navLink' to={'/'}>Upcoming conventions</Link>
                <Link className='navLink' to={'/characters'}>Most Popular Characters</Link>
            </div>
        </div>
    )
}
