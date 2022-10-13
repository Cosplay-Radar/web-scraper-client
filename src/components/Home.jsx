import React from 'react';
import { Navbar } from './Navbar';
import './home.css';

export function Home () {
    return (
        <div>
            <Navbar/> 
            <div className='aboutContainer'>
                <div className='content'>
                    <h3>About Cosplay Radar</h3>
                    <p>
                        Cosplay Radar was built for Adventurer's Hoard; a 3D design/printing company that specializes in cosplay and miniature models.  
                        The researcher app will be able to show you upcoming conventions and the current most popular characters.  Plan your product releases and what to research for the future!
                        Try clicking on the links above to discover some useful information.
                    </p>
                </div>
                    <h3>About the Developer:</h3>
                <div className='developerContent'>
                    <p className='developerText'>
                        Developed by Alex Brown, an Osaka based full-stack developer, using NodeJS webscraping. 
                        I began my journey by teaching myself how to 3D model and print back in 2018, and finally had the confidence to sell my products in early 2021 with Adventurer's Hoard.
                        Within that time I was also teaching myself how to code with HTML, CSS and JavaScript.  My wife and I moved to Japan in the Summer of 2021 where I studied at Code Chrysalis.
                        Fast forward 1 year and my transition to a new career path has only just started; developing applications like this and learning new technologies, while also running
                        my modeling business.
                    </p>
                    <div>
                        <img className='developerPhoto' alt='developer' src='https://media-exp1.licdn.com/dms/image/C4D03AQEvG3Kwfijm3w/profile-displayphoto-shrink_800_800/0/1657156861178?e=1671062400&v=beta&t=iXCxd9T57sfSUwNwKp3X45Uk3faF6Ak3Dg8I7N7pswM' />
                    </div>
                </div>
            </div>
            <p>Websites used: <b>animecons.com, google.com</b></p>
        </div>
    )
}