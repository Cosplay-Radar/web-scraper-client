import React from 'react';
import { Navbar } from '../../components/Navbar.jsx';
import { Footer } from '../../components/Footer.jsx';
import './about.css';

export function About () {
    return (
        <div id='aboutContainer'>
            <Navbar/> 
            <div className='aboutContainer'>
                <div className='content'>
                    <h3>About</h3>
                    <p>
                        Cosplay Radar was built for Adventurer's Hoard: a 3D design/printing company that specializes in cosplay and miniature models.  
                        This application will be able to show you upcoming conventions and the current most popular characters.
                        Try clicking on the menu button to see what information you can find.
                        If you would like to see the Github repository you can click on this link, feel free to contribute or make suggestions: <a href='https://github.com/Cosplay-Radar'>Cosplay Radar </a>
                    </p>
                </div>
                <div className='content'>
                    <h3>Adventurer's Hoard</h3>
                    <p>
                        Beginning in February of 2021, Adventurer's Hoard is a 3D design/printing company that specializes in costume pieces and props for conventions; selling 3D files to customers around the world.
                        As the world has become increasingly more remote and 3D printing is showing signs of growth with hobbyists, keeping up with information and needs is a priority.  
                        As we near 400 sales in a little under two years, it's important to keep moving ahead and designing the most unique products possible.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}