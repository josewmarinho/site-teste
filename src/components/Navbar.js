import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { FaBars } from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Logo from '../images/LogoMaxLaudo.svg';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} alt="" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            {click ? <AiOutlineCloseCircle/> : <FaBars/> }
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/maxlaudos' className='nav-links' onClick={closeMobileMenu}>
            MaxLaudos
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/telerradiologia'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              O que é Telerradiologia
            </Link>
          </li>
          
          
          <li className='nav-item'>
            <Link
              to='/contato'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contato
            </Link>
          </li>
         
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
