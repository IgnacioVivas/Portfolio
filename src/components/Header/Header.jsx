import React, { useEffect, useState } from 'react';
import './header.scss';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import yo from '../../image/yoo.png';
import yoRecortado from '../../image/yo-recortada.png';

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [myPhoto, setMyPhoto] = useState(yo);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= 768) {
      setMyPhoto(yoRecortado);
    } else {
      setMyPhoto(yo);
    }
  }, [screenWidth]);

  // console.log(screenWidth);

  return (
    <div className='container-header' id='inicio' style={{ backgroundImage: `url(${myPhoto})` }}>
      <NavBar />
      <Title />
    </div>
  );
}

export default Header;
