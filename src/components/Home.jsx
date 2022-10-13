import React from 'react';
import { Navbar } from './Navbar';
import './home.css';

export function Home () {
    return (
        <div>
            <Navbar/> 
            <div className='welcomeTitle'>
                <h2>About:</h2>
            </div>
            <div className='aboutContainer'>
                <div>
                    <p>
                        This app was built for Adventurer's Hoard; a 3D design/printing company that specializes in cosplay and miniature models.  
                        The researcher app will be able to show you upcoming conventions and the current most popular characters.  Plan your releases and what products to research for the future!
                        Try clicking on the links above to discover some useful information.
                    </p>
                </div>
                <div className='developerContainer'>
                    <p>Developed by Alex Brown, an Osaka based full stack developer</p>
                </div>
            </div>
        </div>
    )
}