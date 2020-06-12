import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';

import imgLogo from './assets/img/logo192.png'
import './global.css';

function App() {

  const logo = 'Pagina Principal'
  const listaDeCard = [<Card />, <Card />, <Card />, <Card />]

  return (
    <div className="App">
      <Header />  
      <h1>{logo}</h1>
      <main className="container">
        {listaDeCard}
      </main>
      <img src={imgLogo} alt=""></img>
      <Footer />
    </div>
  );
}

export default App;
