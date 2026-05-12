import React from 'react'
import { FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../images/Company-logo.png'
import '../style/homefooter.css'

const HomeFooter = () => {
  return (
    <div className='footer-section'>
      <div className='brand-section'>
        <div className='logo-section'>
          <img src={logo} alt="Company Logo" className='logo-img'/>
        </div>
        <div className='fl contact-section'>
          <FaInstagram className='contact-logo' size={40}/>
          <FaLinkedinIn className='contact-logo' size={40}/>
          <FaTwitter className='contact-logo' size={40}/>
          <FaFacebook className='contact-logo' size={40}/>
        </div>
        <div className='fl app-section'>
          <img src="https://res.cloudinary.com/dj9vccr8n/image/upload/v1778564835/google-play_aatol2.png" alt="" className='store'/>
          <img src="https://res.cloudinary.com/dj9vccr8n/image/upload/v1778565090/app-store_z3z39d.png" alt="" className='store' style={{padding: '1.2rem'}}/>
        </div>
      </div>
      <div className='links-section'>
        <div>
            <p className='link-heading'>Company</p>
            <p><a href="#About">About</a></p>
            <p><a href="#FAQ">Help/FAQ</a></p>
            <p><a href="#AirlineFees">Airlinefees</a></p>
        </div>
        <div>
            <p className='link-heading'>Contact</p>
            <p><a href="#Career">Careers</a></p>
            <p><a href="#Press">Press</a></p>
            <p><a href="#Airline">Airline</a></p>
        </div>
        <div>
            <p className='link-heading'>More</p>
            <p><a href="#Mobile">Mobile</a></p>
            <p><a href="#Affiliate">Affiliate</a></p>
            <p><a href="#tips">Low far tips</a></p>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
