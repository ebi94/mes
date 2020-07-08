import React from 'react';
import logo from '../../images/logo.png';
import { BsChevronDown } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import './Styles.css';

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo-image"/>
        </div>
        <div className="navbar-menu">
          <span className="navbar-menu-item">KELAS <BsChevronDown className="icon-menu-item"/></span>
          <span className="navbar-menu-item">EVENTS</span>
          <span className="navbar-menu-item">KONTAK</span>
        </div>
        <div className="navbar-right-menu">
          <FaUserCircle className="icon-user"/>
          <span className="right-menu-item">MASUK</span>
          <span className="navbar-slice">/</span>
          <span className="right-menu-item">DAFTAR</span>
        </div>
    </header>
  );
}

export default Navbar;
