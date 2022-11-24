import React from 'react';
import './header.scss';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import yo from '../../image/yoo.png';

function Header() {
  return (
    <div className='container-header' id='inicio' style={{ backgroundImage: `url(${yo})` }}>
      <NavBar />
      <Title />
    </div>
  );
}

export default Header;
