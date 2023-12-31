import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#222222" }}>
            <ScrollToTop smooth top='1000' color='white' style={{ border: "2px solid #DEC87C", backgroundColor: '#DEC77B', display: 'flex', justifyContent: 'center' }} />
            <footer className="footer footer-center p-5 text-base-content" style={{ backgroundColor: '#222222', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <div className='mt-4'>
                    <div className="grid grid-flow-col gap-4">
                        <button className='text-white rounded-full'><Link to='https://www.facebook.com/Raincloudcommunications' target="_blank" rel="noopener noreferrer"><BsFacebook className='w-8 h-8'></BsFacebook></Link> </button>
                        <button className='text-white rounded-full'><Link to='https://www.instagram.com/raincloud.communications/' target="_blank" rel="noopener noreferrer"><BsInstagram className='w-8 h-8'></BsInstagram></Link></button>
                        <button className='text-white rounded-full'><Link to='https://www.linkedin.com/company/raincloud-communications/' target="_blank" rel="noopener noreferrer"><BsLinkedin className='w-8 h-8'></BsLinkedin></Link></button>
                    </div>
                </div>
                <div>
                    <p className='text-white'>Copyright © 2023 - All right reserved by RainCloud Communications Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;