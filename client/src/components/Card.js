import React from 'react';
import styled from '@emotion/styled';
import Coaster from '../assets/coaster-taron.jpg';
import Wagon from '../assets/coaster-wagon.svg';

const CardWrap = styled.div`
  filter: drop-shadow(2px 3px 3px rgba(50, 50, 0, 0.2));
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.primary};
  background-color: rgba(255, 255, 255, 0.8);
  width: 300px;
  height: 200px;
  margin: auto;
  margin-top: 10px;
  clip-path: polygon(10% 0, 100% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 100%, 0 15%);
`;

const Image = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

const WagonPicto = styled.img`
  width: 8%;
  margin: 1px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 5px;
`;

const Name = styled.h2`
  display: flex;
`;

const Ranking = styled.h2`
  color: ${props => props.theme.colors.highlight};
  margin-left: 180px;
`;

const RankingFix = styled.h2``;

const RankingContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: -20px;
`;

export default function CardComponent() {
  return (
    <CardWrap>
      <Card>
        <Image src={Coaster}></Image>
        <Container>
          <Name>Taron</Name>
          <RankingContainer>
            <Ranking>6.3</Ranking>
            <RankingFix>/8</RankingFix>
          </RankingContainer>
        </Container>
        <Wrapper>
          <WagonPicto src={Wagon}></WagonPicto>
          <WagonPicto src={Wagon}></WagonPicto>
          <WagonPicto src={Wagon}></WagonPicto>
          <WagonPicto src={Wagon}></WagonPicto>
          <WagonPicto src={Wagon}></WagonPicto>
          <WagonPicto src={Wagon}></WagonPicto>
          <WagonPicto src={Wagon}></WagonPicto>
          <WagonPicto src={Wagon}></WagonPicto>
        </Wrapper>
      </Card>
    </CardWrap>
  );
}
