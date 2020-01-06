import React, { useState } from 'react';
import styled from '@emotion/styled';
import MenuIcon from '../assets/icon-feather.svg';

const Icon = styled.img`
  width: 30px;
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: none;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Toggle({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setToggle(toggle => !toggle)}>
        <Icon src={MenuIcon}></Icon>
      </Button>
      {toggle && <> {children} </>}
    </Wrapper>
  );
}

export default Toggle;
