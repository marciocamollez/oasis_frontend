import React from 'react';
import axios from 'axios';
import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';
import Link from 'next/link';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Home = (data) => (
  <div>
    <Head>
      <title>Home</title>
      <meta name='robots' content='index,follow' />
      <meta name='description' content='Site de ... sobre ...' />
    </Head>
    <Menu />
    <Jumbotron fluid className="descr-top">
      <Container>
    <h1 className="display-4">{data.response.home.tituloTopo}</h1>
        <p className="lead mb-4">{data.response.home.descTopo}</p>

        <Link href={data.response.home.linkBtnTopo}>
          <a className="btn btn-lg btn-outline-light">{data.response.home.tituloBtnTopo}</a>
        </Link>

      </Container>
    </Jumbotron>

    <Jumbotron fluid className="historia" id="historia">
      <Container>
        <div className="row featurette">
          <div className="col-md-6">
            <h2 className="featurette-heading">{data.response.home.historiaTitulo} </h2>
            <p className="lead">{data.response.home.historiaDesc}</p>
          </div>
          <div className="col-md-6">
            <div className="row circulo-serv">
              
              <img src={data.response.home.historiaFoto} className="img-fluid" />
              
            </div>
          </div>
        </div>
      </Container>
    </Jumbotron>

    <Jumbotron fluid className="video" id="acustico">
      <Container>
        <h2 className="display-4 video-titulo">{data.response.home.acusticoTitulo}</h2>
        <p className="lead text-center video-parag">{data.response.home.acusticoDesc}</p>

        <div className="row justify-content-md-center">
          <div className="col-12 col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              
              <iframe src="https://www.youtube.com/embed/D1iGNA6M434" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
          </div>
        </div>
      </Container>
    </Jumbotron>

    <Jumbotron fluid className="projeto" id="discografia">
      <Container>
        <div className="marketing text-center">
          <h1 className="display-4">{data.response.home.discografiaTitulo}</h1>
          <p>{data.response.home.discografiaDesc}</p>
          <div className="row row-projeto">

            <div className="col-sm-12 col-md-3">
              <div className="discografia-album">
                <img src={data.response.home.discografiaFotoUm} className="img-fluid" />
              </div>
              <h2>{data.response.home.discografiaTituloUm}</h2>
              <p>Ano de Lançamento: {data.response.home.discografiaAnoUm}</p>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="discografia-album">
                <img src={data.response.home.discografiaFotoDois} className="img-fluid" />
              </div>
              <h2>{data.response.home.discografiaTituloDois}</h2>
              <p>Ano de Lançamento: {data.response.home.discografiaAnoDois}</p>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="discografia-album">
                <img src={data.response.home.discografiaFotoTres} className="img-fluid" />
              </div>
              <h2>{data.response.home.discografiaTituloTres}</h2>
              <p>Ano de Lançamento: {data.response.home.discografiaAnoTres}</p>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="discografia-album">
                <img src={data.response.home.discografiaFotoQuatro} className="img-fluid" />
              </div>
              <h2>{data.response.home.discografiaTituloQuatro}</h2>
              <p>Ano de Lançamento: {data.response.home.discografiaAnoQuatro}</p>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="discografia-album">
                <img src={data.response.home.discografiaFotoCinco} className="img-fluid" />
              </div>
              <h2>{data.response.home.discografiaTituloCinco}</h2>
              <p>Ano de Lançamento: {data.response.home.discografiaAnoCinco}</p>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="discografia-album">
                <img src={data.response.home.discografiaFotoSeis} className="img-fluid" />
              </div>
              <h2>{data.response.home.discografiaTituloSeis}</h2>
              <p>Ano de Lançamento: {data.response.home.discografiaAnoSeis}</p>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="discografia-album">
                <img src={data.response.home.discografiaFotoSete} className="img-fluid" />
              </div>
              <h2>{data.response.home.discografiaTituloSete}</h2>
              <p>Ano de Lançamento: {data.response.home.discografiaAnoSete}</p>
            </div>

            
          </div>
        </div>
      </Container>
    </Jumbotron>
    
    <Rodape data={data.response.rodape} />
  </div>
);

//Aqui ele lê a API do backend
Home.getInitialProps = async () => {
  const response = await axios.get(
    'http://localhost:8080/home'
    );
    //console.log(response.data); 

    return {response: response.data}
};

export default Home