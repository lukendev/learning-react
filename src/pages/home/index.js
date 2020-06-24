import React, { useState } from 'react';
import Card from '../../components/card'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import Depoimento from '../../components/depoimento'

// import { Container } from './styles';

function Home() {
    const [stateCard, setStateCard] = useState([
      // <Card titulo="Doação de roupas" descricao="Roupa engraçada!"/>,
      // <Card titulo="Doação de Alimento"/>,
      // <Card titulo="Doação de Equipamento"/>,
      // <Card titulo="Doação de Equipamento"/>
    ])

    const [stateDepoimentos, setStateDepoimentos] = useState([
      // <Depoimento nome="Naty" titulo="A vida ficou mais feliz quando ajudei" texto="Ajudei a pessoa e ela ficou feliz" />,
      // <Depoimento nome="Naty" titulo="A vida ficou mais feliz quando ajudei" texto="Ajudei a pessoa e ela ficou feliz" />
    ])

    const logo = ''

  //depoimento = Nome da PermissionStatus, Titulo, texto

  function adicionarCard(){
    setStateCard([...stateCard, <Card />])
  }

  function adicionarDepoimentos(nome, titulo, texto){
    setStateDepoimentos([...stateDepoimentos, <Depoimento nome={nome} titulo={titulo} texto={texto} />])
  }

  return (
    <div className="App">
      <Header logado='false'/>  
      <button onClick={adicionarCard}>Adicionar Doação</button>
      <button onClick={() => adicionarDepoimentos('Luken', 'Nice', 'lalala')}>Adicionar Depoimento</button>
      <main className="container">
        {stateCard}
      </main>

      <Container>
      
      <section>
        <h1 className="text-center m-3">Depoimentos</h1>
        <div className="d-flex justify-content-center mb-5">
          {stateDepoimentos}
        </div>
        
      </section>

      </Container>
      <Footer />

      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </div>
  );
};

export default Home;