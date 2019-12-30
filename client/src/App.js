import React from 'react';
import CardComponent from '../src/components/Card';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import HeaderNav from './components/Header.js';

const CardWrapper = styled.div`
  margin-top: 110px;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={main}>
        <GlobalStyles />
        <HeaderNav />
        <CardWrapper>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
        </CardWrapper>
      </ThemeProvider>
    </>
  );
}
