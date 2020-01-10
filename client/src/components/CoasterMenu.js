import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import menuIcon from '../assets/icon-feather.svg';

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

const Icon = styled.img`
  width: 30px;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: none;
  border: none;
`;

export function CoasterMenu() {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  function addSortToURL(sortBy) {
    history.push(`?_sort=${sortBy}&_order=desc`);
    setShowMenu(false);
  }

  return (
    <Shadow>
      <IconButton onClick={() => setShowMenu(!showMenu)}>
        <Icon src={menuIcon} />
      </IconButton>
      {showMenu && (
        <Menu>
          <Text>Sort by:</Text>
          <Button value="ranking" onClick={event => addSortToURL(event.target.value)}>
            Ranking
          </Button>
          <Button value="speed" onClick={event => addSortToURL(event.target.value)}>
            Speed
          </Button>
          <Button value="lenght" onClick={event => addSortToURL(event.target.value)}>
            Length
          </Button>
          <Button value="duration" onClick={event => addSortToURL(event.target.value)}>
            Duration
          </Button>
          <Button value="height" onClick={event => addSortToURL(event.target.value)}>
            Height
          </Button>
        </Menu>
      )}
    </Shadow>
  );
}

export default CoasterMenu;
