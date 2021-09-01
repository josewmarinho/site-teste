import React from 'react';

import './maxlaudos.css';

import ImagemInicio from '../../images/Teleradiologia.jpg'

export default function Maxlaudos() {
  return (
    <>
      <main className="inicio-container">
        <div className="inicio-content">
          <h1>MaxLaudos</h1>
          <p>Coordenada por radiologista, a MaxLaudos referência em laudos a distância por possibilitar que os melhores radiologistas subespecialistas do mercado atuem junto a clínicas e hospitais. </p>
          <p>Nossa principal preocupação foi a seleção minuciosa dos radiologistas parceiros e emos orgulho em afirmar que contamos com a melhor equipe do mercado, composta por radiologistas experientes e altamente especializados nas diversas subáreas da radiologia.</p>
        </div>
        <img src={ImagemInicio} alt="" />

      </main>

    </>
  );
}
