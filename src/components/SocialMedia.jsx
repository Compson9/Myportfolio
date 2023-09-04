import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import './SocialMedia.scss'

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://twitter.com/el_compson/status/1514286053796028423?s=46&t=wdiKziK1_xaLLSPmMYuPuA' target="_blank" rel="noopener noreferrer" >  <BsTwitter /></a>
    
    </div>
    <div>
    <a href='https://www.linkedin.com/in/elvis-compson-78a590123' target="_blank" rel="noopener noreferrer" >
    <FaLinkedin />
    </a>
    </div>
    <div>
    <a href='https://instagram.com/el_compson?igshid=NTc4MTIwNjQ2YQ==' target="_blank" rel="noopener noreferrer" >
    <BsInstagram />
    </a>
     
    </div>
  </div>
);

export default SocialMedia;