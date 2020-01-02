import React from 'react';
import CoasterCard from '../src/components/CoasterCard';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import HeaderNav from './components/Header.js';
import coaster from './assets/coaster-taron.jpg';

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
          <CoasterCard name="Collosos" ranking={4.2} image={coaster} />
          <CoasterCard name="Taron" ranking={7} image={coaster} />
        </CardWrapper>
      </ThemeProvider>
    </>
  );
}
