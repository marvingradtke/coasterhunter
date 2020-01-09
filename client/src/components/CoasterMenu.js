import React from 'react';
import styled from '@emotion/styled';
import Toggle from '../components/Toggle';
import { useHistory } from 'react-router-dom';

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
  let history = useHistory();

  function handleClick(value) {
    history.push(`coasters?_sort=${value}&_order=desc`);
  }

  return (
    <>
      <Shadow>
        <Toggle>
          <Menu>
            <Text>Sort by:</Text>
            <Button value="ranking" onClick={event => handleClick(event.target.value)}>
              Ranking
            </Button>
            <Button value="speed" onClick={event => handleClick(event.target.value)}>
              Speed
            </Button>
            <Button value="lenght" onClick={event => handleClick(event.target.value)}>
              Length
            </Button>
            <Button value="duration" onClick={event => handleClick(event.target.value)}>
              Duration
            </Button>
            <Button value="height" onClick={event => handleClick(event.target.value)}>
              Height
            </Button>
          </Menu>
        </Toggle>
      </Shadow>
    </>
  );
}

export default CoasterMenu;
