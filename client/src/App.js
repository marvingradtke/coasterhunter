import React from 'react';
import CoasterCard from '../src/components/CoasterCard';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import Header from './components/Header.js';
import { useState } from 'react';

const CardWrapper = styled.div``;

const Margin = styled.div`
  margin-top: 100px;
`;

export default function App() {
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
      <ThemeProvider theme={main}>
        <GlobalStyles />
        <Header />
        <Margin />
        {coasterInfos.map(info => (
          <CardWrapper key={info.id}>
            <CoasterCard name={info.name} ranking={info.ranking} image={info.pic} />
          </CardWrapper>
        ))}
      </ThemeProvider>
    </>
  );
}
