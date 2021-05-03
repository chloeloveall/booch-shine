import React from 'react';
import DarkBackground from '../../img/darkbackground.png';
import Logo from './Logo';
import ImageCarousel from './ImageCarousel';

const Main = () => {
  return (
    <>
      <div style={{backgroundColor: '#000000', backgroundImage: `url(${DarkBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderBottom: '2px #f2be40 solid', filter: 'drop-shadow(0 7px 3px rgba(0, 0, 0, .4))'}}>
        <Logo />
        <ImageCarousel />
      </div>
    </>
  );
}

export default Main;