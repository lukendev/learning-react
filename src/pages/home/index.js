import React from 'react';
import Card from '../../components/card'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import Depoimento from '../../components/depoimento'

// import { Container } from './styles';

function Home() {
    const listaDeCard = [<Card titulo="Doação de roupas" descricao="Roupa engraçada!"/>, <Card titulo="Doação de Alimento"/>, <Card titulo="Doação de Equipamento"/>]

  //depoimento = Nome da PermissionStatus, Titulo, texto

  return (
    <div className="App">
      <Header logado='false'/>  
      <main className="container">
        {listaDeCard}
      </main>

      <Container>
      
      <section>
        <h1 className="text-center mb-5">Depoimentos</h1>
        <div className="d-flex justify-content-center mb-5">
          <Depoimento nome="Naty" titulo="A vida ficou mais feliz quando ajudei" texto="Ajudei a pessoa e ela ficou feliz" />
          <Depoimento nome="Naty" titulo="A vida ficou mais feliz quando ajudei" texto="Ajudei a pessoa e ela ficou feliz" />
        </div>
        
      </section>

      </Container>
      <Footer />

      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </div>
  );
};

export default Home;