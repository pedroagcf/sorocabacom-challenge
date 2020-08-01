import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className='app-sorocabacom'>
      <Header />
      <section className='app-sorocabacom__main'>
        <MainSection />
      </section>
    </div>
  );
}

export default App;
