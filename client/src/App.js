import React from 'react';
import CoasterCard from '../src/components/CoasterCard';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import Header from './components/Header.js';

const CardWrapper = styled.div`
  margin-top: 110px;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={main}>
        <GlobalStyles />
        <Header />
        <CardWrapper>
          <CoasterCard name="" ranking="" image="" />
        </CardWrapper>
      </ThemeProvider>
    </>
  );
}
