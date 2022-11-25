import { Link, animateScroll as scroll } from 'react-scroll';
import './arrowUp.scss';

function ArrowUp() {
  return (
    <Link
      id='container-arrowUp'
      activeClass='active-arrow'
      to='inicio'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <div id='box-arrowUp'>
        <i class='ri-arrow-up-line' id='arrow'></i>
      </div>
    </Link>
  );
}

export default ArrowUp;
