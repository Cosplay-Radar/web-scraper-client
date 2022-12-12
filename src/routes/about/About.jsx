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
                        This application will be able to show you upcoming conventions and the current most popular characters.  Plan your product releases and what to research for the future!
                        Try clicking on the links above to discover some useful information.
                        If you would like to see the Github repository you can click on this link, feel free to contribute or make suggestions: <a href='https://github.com/Cosplay-Radar'>Cosplay Radar</a>
                        
                        You can locate the developers contact details, the store page, and social media at the bottom of the page.  Feel free to get in contact if you would like to contribute or have any suggestions for the project.
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