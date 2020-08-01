import React from 'react';

import './MainSection.scss';
import ChampionCard from '../ChampionCharacter/ChampionCard';

const MainSection = () => {
  return (
    <section className='main-section'>
      <ChampionCard />
    </section>
  );
};

export default MainSection;
