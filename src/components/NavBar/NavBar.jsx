import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './navBar.scss';

function NavBar() {
  return (
    <div className='navBar-container'>
      <div className='navBar-wrapper'>
        <div className='icon-container'>
          <h5>
            IV<span id='point'>.</span>
          </h5>
        </div>
        <ul className='nav-bar'>
          <li>Inicio</li>
          <li>Sobre Mí</li>
          <li>Portfolio</li>
          <li>Contactame</li>
          <SocialNetworks />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
