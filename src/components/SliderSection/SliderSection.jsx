import React from 'react';
import { characters } from '../../utils/js/helper';

import './SliderSection.scss';
import CardList from '../CardList/CardList';
const SliderSection = () => {
  return (
    <section className='slider-section'>
      <div className='slider-section__container'>
        <button className='slider-section__container__arrow --left'></button>
        <CardList characters={characters} />
        <button className='slider-section__container__arrow --right'></button>
      </div>
    </section>
  );
};

export default SliderSection;
