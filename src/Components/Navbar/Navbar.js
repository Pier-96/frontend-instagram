import React from 'react';
import './Navbar.css';
import { MdHome } from 'react-icons/md';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <main className='Second-nav'>
      <nav className='Nav-search'>
        <img src='minilogo.png' alt='minilogo' />
        <div className='icons-main'>
          <a href='/posts'>
            <MdHome className='icon-style' />
          </a>
          <a href='/posts'>
            <BsFillArrowLeftSquareFill className='icon-style' />
          </a>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
