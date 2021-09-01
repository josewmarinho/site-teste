import React from 'react';
import styled from 'styled-components';

import TimeImg from '../../images/Time.svg';
import ReportImg from '../../images/Report.svg';
import DoctorImg from '../../images/Doctor.svg';

export default function Adds() {

  return (
    <Container>
      <Wrapper>
        <img src={DoctorImg} alt="" />
        <h1>Equipe especializada</h1>
      </Wrapper>
      <Wrapper>
        <img src={TimeImg} alt="" />
        <h1>Velocidade no tempo de entrega</h1>
      </Wrapper>
      <Wrapper>
        <img src={ReportImg} alt="" />
        <h1>Laudos em alta qualidade</h1>
      </Wrapper>


    </Container>
  );
};

const Container = styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   

   @media screen and (min-width: 868px) {
    max-width: 800px;
    margin: 2rem auto;
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
   }

`;

const Wrapper = styled.div`
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 350px;
   margin: 14px;

   img {
      width: 200px;
      height: 150px;
      margin-top: 15px;
   }

   h1 {
      font-size: 1.7rem;
      margin-top: 15px;
      color: #747474;
      padding: 1rem;
      margin-left: 1.5rem;

   }
`;

