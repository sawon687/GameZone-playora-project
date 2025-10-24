import React from 'react';
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
  <footer className="footer sm:footer-horizontal bg-gradient-to-r  from-purple-600 to-pink-600  text-neutral-content pb-20 p-10">
    <nav>
      <figure className='w-40 h-40 flex items-center'><img  src={logo} alt="Hero.io logo" /></figure>
          <div className='w-60'>
               <p>Hero.io is dedicated to empowering individuals and businesses with cutting-edge digital solutions. We focus on innovation, reliability, and excellence to help you achieve your goals.
                  </p> 
          </div>
    </nav>
  <nav>
    <h6 className="footer-title text-black">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Features</a>
    <a className="link link-hover"> Pricing</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Contact Us</a>

  </nav>
  <nav>
    <h6 className="footer-title">Follow us on:</h6>
    <a className="link link-hover flex gap-2 items-center ">Facebook <FaFacebook className='text-xl'></FaFacebook></a>
    <a className="link link-hover flex gap-2 items-center ">Twitter <FaTwitter className='text-xl'  /></a>

    <a className="link link-hover flex gap-2 items-center ">LinkedIn <FaLinkedin className='text-xl'   /></a>
    <a className="link link-hover flex gap-2 items-center ">Instagram <FaInstagramSquare className='text-xl' /></a>
  </nav>
  <nav className='list-none'>
    <h6 className="footer-title">Follow us on:</h6>
     <li>Email: support@hero.io</li>
     <li>Phone: +880 1234 567890</li>
     <li>Address: 123 Hero Street, Dhaka, Bangladesh</li>
  </nav>
</footer>
    );
};

export default Footer;