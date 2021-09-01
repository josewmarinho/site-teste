import React from 'react';

import './contato.css';

import { BiPhone } from 'react-icons/bi';
import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import ImgContato from '../../images/pagina-contato.jpg';



export default function Contato() {
  return (
    <>
      <main className="containerContato">
      <img src={ImgContato} alt="Dr. Marcio Pio" />

        <section className="heroContato">
          <h1>Contato</h1>

            <div className="content02">
              <a target="_blank" rel="noopener noreferrer" href="tel:0558631946950" >
                <BiPhone /> (xx) xxxx xxxx
              </a>

              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/558698512283">
                <SiWhatsapp /> (xx) xxxx xxxx
              </a>

              <a target="_blank" rel="noopener noreferrer" href="mailto:clinicamarciopio@hotmail.com" >
                <FiMail /> xxxxxxxxx@hotmail.com
              </a>
            </div>

            <div className="content01">
              <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZZAzETd9HW9gMms9" >
                <GoLocation /> xx.Xxxxx xxxxx, xxxxx - Jockey, Teresina PI, xxxxx-xxx
              </a>
            </div>
        </section>
      </main>
    </>
  );
}

