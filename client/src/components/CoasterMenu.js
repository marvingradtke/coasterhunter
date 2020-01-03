import React from 'react';
import styled from '@emotion/styled';
import Toggle from '../components/Toggle.js';

const Shadow = styled.div`
  filter: drop-shadow(2px 3px 3px rgba(50, 50, 0, 0.2));
`;

const Menu = styled.div`
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

function CoasterMenu() {
  return (
    <>
      <Shadow>
        <Toggle>
          <Menu>
            <Text>Sort by:</Text>
            <Button>Ranking </Button>
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
