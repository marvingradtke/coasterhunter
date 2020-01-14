import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import wagon from '../assets/coaster-wagon.svg';
import coasterPath from '../assets/coaster-path.svg';
import location from '../assets/location.svg';
import speed from '../assets/speed.svg';
import length from '../assets/length.svg';
import duration from '../assets/duration.svg';
import height from '../assets/height.svg';

const Shadow = styled.div`
  filter: drop-shadow(2px 3px 3px rgba(50, 50, 0, 0.2));
`;

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  background-color: rgba(255, 255, 255, 0.8);
  width: 300px;
  height: 500px;
  margin: auto;
  margin-top: 10px;
  clip-path: polygon(8% 0, 100% 0, 100% 94%, 91% 100%, 0 100%, 0 5%);
`;

const Image = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 2;
  width: 90%;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const Name = styled.h2`
  display: inline-block;
  margin: 0px;
  flex-grow: 1;
`;

const WagonWrapper = styled.div``;

const WagonImage = styled.img`
  width: 24px;
  margin: 1px;
  opacity: ${props => (props.highlight ? 1 : 0.4)};
`;

const Ranking = styled.span`
  color: ${props => props.theme.colors.highlight};
  font-size: 1.5em;
  font-weight: 500;
`;

const RankingFix = styled.span`
  font-size: 1.5em;
  font-weight: 100;
`;

const IconLocation = styled.img`
  width: 6%;
  margin-right: 4px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 7px 5px 7px 0px;
`;

const IconWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const DetailWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 30%;
  margin-right: 4px;
`;

const CardFooter = styled.img`
  width: 110%;
  height: 70px;
`;

export default function Coaster() {
  const { coasterId } = useParams();
  const [coaster, setCoaster] = useState(null);

  useEffect(() => {
    async function getCoaster() {
      const response = await fetch(`api/coasters/${coasterId}`);
      const newCoaster = await response.json();
      setCoaster(newCoaster);
    }
    getCoaster();
  }, [coasterId]);

  return (
    <Shadow>
      {coaster && (
        <Card>
          <Image src={coaster.pic} />
          <CardContent>
            <NameWrapper>
              <Name>{coaster.name}</Name>
              <Ranking>{coaster.ranking}</Ranking>
              <RankingFix>/8</RankingFix>
            </NameWrapper>
            <Location>
              <IconLocation src={location} />
              {coaster.location}
            </Location>
            <WagonWrapper>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(score => (
                <WagonImage key={score} src={wagon} highlight={score <= coaster.ranking} />
              ))}
            </WagonWrapper>
            <IconWrapper>
              <DetailWrapper>
                <Icon src={speed} />
                {coaster.speed} km/h
              </DetailWrapper>
              <DetailWrapper>
                <Icon src={duration} />
                {coaster.duration} sec.
              </DetailWrapper>
              <DetailWrapper>
                <Icon src={length} />
                {coaster.length} m
              </DetailWrapper>
              <DetailWrapper>
                <Icon src={height} />
                {coaster.height} m
              </DetailWrapper>
            </IconWrapper>
          </CardContent>
          <CardFooter src={coasterPath} />
        </Card>
      )}
    </Shadow>
  );
}
