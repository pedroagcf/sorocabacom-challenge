import React from 'react';
import swordHeader from '../../assets/swordHeader.png';

import './Header.scss';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <img className='header__content__image' src={swordHeader} alt='sword' />
        <h1 className='header__content__title'>supergiantgames</h1>
      </div>
    </header>
  );
};

export default Header;
