import { Link, animateScroll as scroll } from 'react-scroll';
import './navBar.scss';
import { useState, useEffect } from 'react';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

function NavBar() {
  const [addClass, setAddClass] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 690) setAddClass(true);
    else setAddClass(false);
  };

  // useEffect(() => {
  //   console.log('Vertical: ' + window.scrollY);
  // }, [window.scrollY]);

  return (
    <div className='navBar-container' id={addClass ? 'down' : null}>
      <div className='navBar-wrapper'>
        <div className='icon-container'>
          <span>
            IV
            <span id='point'>.</span>
          </span>
        </div>
        <div id='hamburger-container'>
          {showMenu ? (
            <i className='ri-close-fill close' onClick={() => setShowMenu(!showMenu)}></i>
          ) : (
            <i className='ri-menu-line hamburger' onClick={() => setShowMenu(!showMenu)}></i>
          )}
        </div>
        {showMenu && (
          <ul className='nav-bar'>
            <li>
              <Link
                activeClass='active'
                to='inicio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='sobreMi'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='portfolio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='contacto'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contactame
              </Link>
            </li>
            <div id='nav-socialNetworks'>
              <SocialNetworks />
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
