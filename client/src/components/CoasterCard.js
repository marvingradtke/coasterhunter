import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import wagon from '../assets/coaster-wagon.svg';

const Shadow = styled.div`
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

const WagonImage = styled.img`
  width: 24px;
  margin: 1px;
  opacity: ${props => (props.highlight ? 1 : 0.4)};
`;

const CardFooter = styled.div`
  display: flex;
  margin: 5px;
`;

const Name = styled.h2`
  margin: 0px;
  flex-grow: 1;
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

const CardContent = styled.div`
  display: flex;
  margin: 0px 5px;
  width: 100%;
`;

export default function CoasterCard({ image, name, ranking }) {
  return (
    <Shadow>
      <Card>
        <Image src={image} />
        <CardContent>
          <Name>{name}</Name>
          <Ranking>{ranking}</Ranking>
          <RankingFix>/8</RankingFix>
        </CardContent>
        <CardFooter>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(score => (
            <WagonImage key={score} src={wagon} highlight={score <= ranking} />
          ))}
        </CardFooter>
      </Card>
    </Shadow>
  );
}
CoasterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  ranking: PropTypes.number
};
