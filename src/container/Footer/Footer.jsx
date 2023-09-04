import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text" id='contact'>Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:compson9@gmail.com" className="p-text">compson9@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+233 541- 386-76" className="p-text">tel:+233 541- 386-76</a>
        </div>
      </div>
     
      <h1 className='p-text connect'>Connect with me</h1>
      <div className="app__media">
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
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);