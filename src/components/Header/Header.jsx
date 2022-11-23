import React from 'react';
import './header.scss';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';

function Header() {
  return (
    <div id='container-header'>
      <NavBar />
      <Title />
    </div>
  );
}

export default Header;
