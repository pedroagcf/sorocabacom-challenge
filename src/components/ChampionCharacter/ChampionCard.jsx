import React from 'react';
import characterMain from '../../assets/characterMain.png';

import './ChampionCard.scss';

const ChampionCard = () => {
  return (
    <div className='champion-card'>
      <h6 className='champion-card__title'>transistor - red the singer</h6>
      <img className='champion-card__image' src={characterMain} alt='' />
      <p className='champion-card__description'>
        "Olha, o que quer que você esteja pensando, me faça um favor, não
        solte."
      </p>
    </div>
  );
};

export default ChampionCard;
