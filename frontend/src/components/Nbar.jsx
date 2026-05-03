import React from 'react'
import '../style/nbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/Company-logo.png'
import { FiMenu } from "react-icons/fi";

const Nbar = ({ isLoggedIn }) => {
    const onMenuIconClick = () => {
        const dropDown = document.querySelector('.drop-down');
        dropDown.style.display = 'block';
    }
    return (
        <nav className="main-nav">
            <a href="#logo" className="logo">
                <img src={logo} alt="" />
            </a>
            <div className='menu'>
                <div className='menu-icon' onClick={onMenuIconClick}>
                    <FiMenu color='#eab032' size={'1.5rem'}/>
                </div>
                <div className='drop-down'>
                    <ul className='list-menu'>
                        <li><Link to={"/Home"}>Home</Link></li>
                        <li><Link to={"/About"}>About</Link></li>
                        <li><Link to={"/Services"}>Services</Link></li>
                        <li><Link to={"/Contact us"}>Contact Us</Link></li>
                    </ul>
                </div>
                {/* <div className="bt">
                <input type="text" className='search-input' placeholder='Search' />
                <BiSearch style={{ color: "#eab032" }} size={25} className='search-icon' />
                {
                    isLoggedIn ? (
                    <a href="#profile"><FaUser size={25} style={{ marginLeft: 30, color: "#ffff" }} /></a>
                    ) : (
                    <>
                        <Link to={"/signup-form"}><button className='primary-button btn-1'>Sign up</button></Link>
                        <Link to={"/login-form"}><button className="secondary-button btn-2">Login</button></Link>
                    </>
                    )
                }
                </div> */}
            </div>
        </nav>
    )
}

export default Nbar
