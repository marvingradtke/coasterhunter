import React from 'react';
import styled from '@emotion/styled';

const CardWrap = styled.div`
  filter: drop-shadow(2px 3px 3px rgba(50, 50, 0, 0.2));
`;

const Card = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.7;
  box-shadow: 10px 10px black;
  width: 300px;
  height: 150px;
  margin: auto;
  clip-path: polygon(10% 0, 100% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 100%, 0% 20%);
`;

export default function CardComponent() {
  return (
    <CardWrap>
      <Card></Card>
    </CardWrap>
  );
}
