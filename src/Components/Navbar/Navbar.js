import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md'; // Importing hamburger and close icons
import Homecart from '../Assets/Homecart.png';
import img1 from '../Assets/img1.webp';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between open and close
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={img1} alt="Pets Kingdom Logo" />
        <p>PETS KINGDOM</p>
        <ul className='nav-menu1'> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Breed">Pets</Link></li>
        <li><Link to="/Login">Register</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='mobile-menu-icon' onClick={toggleMenu}>
  {menuOpen ? <MdClose size={25} /> : <MdMenu size={25} />} 
  <h3 className='s1' style={{ marginRight: '10px' }}>Services</h3> {/* Added margin */}
</div>

      
      {/* Navigation Menu */}
      
      
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
      
        <li><Link to="/Petgroom" onClick={() => setMenuOpen(false)}>Pet Grooming</Link></li>
        <li><Link to="/Pettrain" onClick={() => setMenuOpen(false)}>Pet Training</Link></li>
        <li><Link to="/Consult" onClick={() => setMenuOpen(false)}>Consulting Vet</Link></li>

       

      </ul>

      {/* Cart Icon */}
      <div className='nav-login-cart'>
        <img src={Homecart} alt="Cart" />
      </div>
    </div>
    
  );
}

export default Navbar;
