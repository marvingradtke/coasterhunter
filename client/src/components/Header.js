import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/coasterhunter-logo.svg';
import searchIcon from '../assets/icon-search.svg';
import CoasterMenu from './CoasterMenu';
import { useHistory } from 'react-router-dom';

const Head = styled.header`
  display: flex;
  background: ${props => props.theme.colors.background};
  justify-content: space-between;
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
`;

const Icon = styled.img`
  width: 30px;
  opacity: 0;
`;

const HeadLogo = styled.img`
  height: 120px;
  margin-top: 10px;
`;

const HeadButton = styled.button`
  width: 45px;
  height: 45px;
  margin: 15px;
  background: none;
  border: none;
`;

export default function Header() {
  const history = useHistory();

  return (
    <Head>
      <HeadButton>
        <Icon src={searchIcon} />
      </HeadButton>
      <HeadLogo src={logo} onClick={() => history.push(``)} />
      <CoasterMenu />
    </Head>
  );
}
