import React from 'react';

import './CardList.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
const CardList = ({ characters }) => {
  return (
    <div className='card-list'>
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default CardList;
