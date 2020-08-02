import React from 'react';
import characterMain from '../../assets/characterMain.png';

import './ChampionCard.scss';

const ChampionCard = () => {
  return (
    <div className='champion-card'>
      <div className='champion-card__wrapper'>
        <h6 className='champion-card__title'>transistor - red the singer</h6>
        <img className='champion-card__image' src={characterMain} alt='' />
        <span className='champion-card__feather --top-left'></span>
        <span className='champion-card__feather --top-right'></span>
        <span className='champion-card__feather --bottom-left'></span>
        <span className='champion-card__feather --bottom-right'></span>
        <div className='champion-card__container'>
          <p className='champion-card__container__description'>
            "Olha, o que quer que você esteja pensando, me faça um favor, não
            solte."
          </p>
        </div>
      </div>
      <span className='champion-card__mouse'></span>
    </div>
  );
};

export default ChampionCard;
