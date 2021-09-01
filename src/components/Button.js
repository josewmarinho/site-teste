import React from 'react';
import './Button.css';

import { AiOutlineWhatsApp } from 'react-icons/ai';


export function Button() {
  return (
    <a className='ancora' target="_blank" rel="noopener noreferrer" href="https://wa.me/558681822211">
      <button className='btn'> <AiOutlineWhatsApp />WhatsApp</button>
    </a>
  );
}
