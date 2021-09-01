import React from 'react';

import './telerradiologia.css';

import TelerradiologiaImg from '../../images/TelerradiologiaImg.jpg';

export default function Telerradiologia() {
  return (
    <>
      <main className="containerClinica">
        <section className="heroClinica">
          <h1>Telerradiologia</h1>
          <p><strong>Telerradiologia</strong> é o nome dado para a prática da radiologia a distância e é uma especialidade da telemedicina. Ela possibilita que médicos radiologistas possam interpretar e elaborar laudos de exames médicos através da internet.Telerradiologia é o nome dado para a prática da radiologia a distância e é uma especialidade da telemedicina. Ela possibilita que médicos radiologistas possam interpretar e elaborar laudos de exames médicos através da internet. </p>
          <p>Em síntese, é uma atividade inovadora de apoio a Centros de Diagnóstico por Imagem de hospitais e clínicas. </p>
        </section>
        <img src={TelerradiologiaImg} alt="Dr. Marcio Pio" />
      </main>
    </>
  );
}
