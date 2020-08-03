import React from 'react';

import './CardListMobile.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
const CardListMobile = ({ characters }) => {
  return (
    <div className='card-list-mobile'>
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default CardListMobile;
