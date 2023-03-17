import React from 'react';
import './footer.css';

export function Footer() {
    return (
        <footer id="footer">
            <div id="links-container">
                <div class="contact-link">
                    <a href="https://github.com/AlexBrown4020" class="contact-image">
                        <img alt='github logo' height='50px' width='50px' class="contact-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"/>
                    </a>
                </div>
                <div class="contact-link">
                    <a href="https://www.linkedin.com/in/alexander-brown-2a6b7820a/" class="contact-image">
                        <img alt='linkedin logo' height='50px' width='50px' class="contact-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"/>
                    </a>
                </div>
                <div class="contact-link">
                    <a href="https://www.etsy.com/uk/shop/AdventurersHoardShop?ref=seller-platform-mcnav" class="contact-image">
                        <img alt='etsy logo' height='50px' width='50px' class="contact-image" src="https://cdn-icons-png.flaticon.com/512/49/49106.png?w=826&t=st=1678934168~exp=1678934768~hmac=ef6bacdace01c54f660631e2c97694410b4486f0eacf78aa65edcb88d97a417f"/>
                    </a>
                </div>
            </div>
            <p>©17th March 2023, Adventurer's Hoard, Alexander Brown, All rights reserved.</p>
        </footer>
    )
}


