import React from 'react';
import styled from '@emotion/styled';
import Coaster from '../assets/coaster-taron.jpg';

const CardWrap = styled.div`
  filter: drop-shadow(2px 3px 3px rgba(50, 50, 0, 0.2));
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.secondary};
  width: 300px;
  height: 200px;
  margin: auto;
  clip-path: polygon(10% 0, 100% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 100%, 0 15%);
`;

const CardBox = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.secondary};
  height: 100px;
  width: 300px;
  margin: auto;
  position: absolute;
  top: 80px;
`;

const Image = styled.img`
  display: flex;
  width: 100%;
  position: relative;
`;

export default function CardComponent() {
  return (
    <CardWrap>
      <Card>
        <Image src={Coaster}></Image>
        <CardBox>
          <h2>Taron</h2>
        </CardBox>
      </Card>
    </CardWrap>
  );
}
