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
      <a href='/posts'>
        <MdHome />
      </a>
      <a href='/new'>
        <MdOutlineAddToPhotos />
      </a>
      <a href='/profile'>
        <MdAccountCircle />
      </a>
    </nav>
  );
};

export default Navbar;
