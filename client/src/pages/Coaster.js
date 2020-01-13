import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import wagon from '../assets/coaster-wagon.svg';

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
  clip-path: polygon(10% 0, 100% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 100%, 0 15%);
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

const Location = styled.div`
  width: 100%;
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
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
            <Location>{coaster.location}</Location>
            <WagonWrapper>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(score => (
                <WagonImage key={score} src={wagon} highlight={score <= coaster.ranking} />
              ))}
            </WagonWrapper>
            <div>4 mopeds</div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      )}
    </Shadow>
  );
}
