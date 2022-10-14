import React from 'react';
import './footer.css';

export function Footer() {
    return (
        <footer id="footer">
            <div class="contact-link">
                <a href="https://github.com/AlexBrown4020" class="contact-image">
                    <img alt='github logo' class="contact-image" src="data:image/png;base64,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"/>
                </a>
            </div>
            <div class="contact-link">
                <a href="https://www.linkedin.com/in/alex-brown-2a6b7820a/" class="contact-image">
                    <img alt='linkedin logo' class="contact-image" src="data:image/png;base64,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"/>
                </a>
            </div>
            <div class="contact-link">
                <a href="https://www.etsy.com/uk/shop/AdventurersHoardShop?ref=seller-platform-mcnav" class="contact-image">
                    <img alt='etsy logo' class="contact-image" src="https://logodix.com/logo/82851.jpg"/>
                </a>
            </div>
            <div class="contact-link">
                <a href="https://www.instagram.com/adventurers_hoard/" class="contact-image">
                    <img alt='instagram link' class="contact-image" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"/>
                </a>
            </div>
            <p>Websites used: <b>animecons.com, google.com</b></p>
        </footer>
    )
}


