import React from 'react';

import './footer.css';

import { GoLocation } from 'react-icons/go';
import { BiPhone } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../images/LogoMaxLaudo.svg';




export default function Footer() {
   return (
      <>
         <main className="containerFooter">
            <section className="heroFooter">
               <a href="/" className="logoImg">
                  <img src={Logo} alt="" />
               </a>

               <div className="tudo">
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
                     <a target="_blank" rel="noopener noreferrer" href="/" >
                        <GoLocation /> xx.Xxxxx xxxxx, xxxxx - Jockey, Teresina PI, xxxxx-xxx
                     </a>
                  </div>

                  <div className="content03">
                     <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" >
                        <FaFacebookF /> Facebook
                     </a>
                     <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com" >
                        <FaInstagram /> Instagram
                     </a>
                  </div>

               </div>

            </section>
         </main>
      </>
   );
}