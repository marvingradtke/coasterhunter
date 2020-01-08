import React from 'react';
import styled from '@emotion/styled';
import Toggle from '../components/Toggle';
import { useState } from 'react';
import { sortByRanking } from '../utils/sortFunctions';

const Shadow = styled.div`
  filter: drop-shadow(2px 3px 3px rgba(50, 50, 0, 0.2));
`;

const Menu = styled.div`
  position: absolute;
  top: 55px;
  right: 16px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.primary};
  background-color: rgba(255, 255, 255);
  width: 200px;
  height: 300px;
  clip-path: polygon(19% 0, 100% 0, 100% 0, 100% 88%, 81% 100%, 0 100%, 0 100%, 0 12%);
`;

const Button = styled.button`
  border: none;
  color: ${props => props.theme.colors.highlight};
  background: white;
  font-weight: 100;
  font-size: 30px;
  margin: 3px;
`;
const Text = styled.div`
  font-size: 30px;
  font-weight: 100;
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: center;
`;
export function CoasterMenu() {
  const [coasterInfos, setCoasterInfos] = useState([]);

  async function getCoasterInfos() {
    const response = await fetch('http://localhost:8080/coasters');
    const newCoasters = await response.json();
    setCoasterInfos(newCoasters);
  }
  React.useEffect(() => {
    getCoasterInfos();
  }, []);

  return (
    <>
      <Shadow>
        <Toggle>
          <Menu>
            <Text>Sort by:</Text>
            <Button onClick={() => setCoasterInfos(sortByRanking(coasterInfos))}>Ranking </Button>
            <Button>Speed </Button>
            <Button>Length </Button>
            <Button>Duration </Button>
            <Button>Hight</Button>
          </Menu>
        </Toggle>
      </Shadow>
    </>
  );
}

export default CoasterMenu;
