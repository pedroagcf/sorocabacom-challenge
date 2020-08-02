import React from 'react';

import './CharacterCard.scss';

const CharacterCard = ({ character }) => {
  return (
    <div className='character-card'>
      <div className='character-card__wrapper'>
        <div className='character-card__wrapper__image'>
          <img src={character.image} alt='' />
        </div>
      </div>
      <p className='character-card__description'>{character.description}</p>
    </div>
  );
};

export default CharacterCard;
