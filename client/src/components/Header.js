import React from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/coasterhunter-logo.svg';
import SearchIcon from '../assets/icon-search.svg';
import CoasterMenu from './CoasterMenu';

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
`;

const HeadLogo = styled.img`
  display: flex;
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
  return (
    <Head>
      <HeadButton>
        <Icon src={SearchIcon}></Icon>
      </HeadButton>
      <HeadLogo src={Logo}></HeadLogo>
      <CoasterMenu />
    </Head>
  );
}
