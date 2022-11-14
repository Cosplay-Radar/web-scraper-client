import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './home.css';

export function Home () {
    return (
        <div id='homeContainer'>
            <Navbar/> 
            <div className='aboutContainer'>
                <div className='content'>
                    <h3>About Cosplay Radar</h3>
                    <p>
                        Cosplay Radar was built for Adventurer's Hoard: a 3D design/printing company that specializes in cosplay and miniature models.  
                        This application will be able to show you upcoming conventions and the current most popular characters.  Plan your product releases and what to research for the future!
                        Try clicking on the links above to discover some useful information.
                    </p>
                    <p>
                        If you would like to see the Github repository you can click on this link, feel free to contribute or make suggestions: <a href='https://github.com/Cosplay-Radar'>Cosplay Radar</a>
                    </p>
                    <p>
                        You can locate the developers contact details, the store page, and social media at the bottom of the page.  Feel free to get in contact
                        if you would like to contribute or have any suggestions for the project.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}