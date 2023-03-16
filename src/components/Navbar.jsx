import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export function Navbar () {
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [menu, setMenu] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenu('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenu('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <div className='navContainer'>
            <div>
                <img className='logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Hoard Logo (circle)" border="0" />
            </div>
            <div className='titleContainer'>
                <Link className='homeLink' to={'/'}><h1>Cosplay Radar</h1></Link>
            </div>
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            <div className={menu}>
                <Link className='nav-link' to={'/'}>Conventions</Link>
                <Link className='nav-link' to={'/characters'}>Characters</Link>
                <Link className='nav-link' to={'/about'}>About</Link>
            </div>
        </div>

    )
}
