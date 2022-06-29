import React from 'react';
import './Navbar.css';

import { MdOutlineAddToPhotos } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';
import { MdOutlineSearch } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav>
      <a href='hehe'>
        <MdOutlineSearch />
      </a>
      <a href='posts'>
        <MdHome />
      </a>
      <a href='aquielpathparasubirfoto'>
        <MdOutlineAddToPhotos />
      </a>
      <a href='proximopathprofile'>
        <MdAccountCircle />
      </a>
    </nav>
  );
};

export default Navbar;
