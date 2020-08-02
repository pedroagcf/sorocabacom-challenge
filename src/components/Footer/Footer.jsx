import React from 'react';

import './Footer.scss';

const Footer = () => {
  const goToTop = () => (document.documentElement.scrollTop = 0);

  return (
    <footer className='footer'>
      <button className='footer__button' onClick={goToTop}>
        <span className='footer__button__arrow --up'></span>
      </button>
    </footer>
  );
};

export default Footer;
