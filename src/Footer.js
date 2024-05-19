import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-3">
                        <a href="https://facebook.com/dictionaryapp" className="text-white me-3 icon-hover">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://twitter.com/dictionaryapp" className="text-white me-3 icon-hover">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://instagram.com/dictionaryapp" className="text-white icon-hover">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                    <div className="col-md-12 text-center">
                        <p className="mb-3">Contact Us: Lester@dictionaryapp.com | Phone: +1 (123) 456-7890</p>
                        <p className="mb-3">Privacy Policy | Terms of Service</p>
                        <p className="mb-0">© 2024 Dictionary App. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;