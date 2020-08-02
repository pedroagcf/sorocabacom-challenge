import React from 'react';

import './SliderSection.scss';
const SliderSection = () => {
  return (
    <section className='slider-section'>
      <div className='slider-section__container'>
        <button className='slider-section__container__arrow --left'></button>
        <div className='slider-section__wrapper'>
          <div className='slider-section__wrapper__card'></div>
          <div className='slider-section__wrapper__card'></div>
          <div className='slider-section__wrapper__card'></div>
        </div>
        <button className='slider-section__container__arrow --right'></button>
      </div>
    </section>
  );
};

export default SliderSection;
