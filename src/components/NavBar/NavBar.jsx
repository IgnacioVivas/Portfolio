import { Link, animateScroll as scroll } from 'react-scroll';
import './navBar.scss';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

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
          <SocialNetworks />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
