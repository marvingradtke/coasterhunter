import React from 'react';
import CoasterCard from '../src/components/CoasterCard';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import Header from './components/Header.js';
import { useState } from 'react';
import { sortByName, sortByRanking } from './utils/sortFunctions';

const CardWrapper = styled.div``;

const Margin = styled.div`
  margin-top: 100px;
`;

const Button = styled.button`
  background: black;
  color: wheat;
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
        <Button onClick={() => setCoasterInfos(sortByName(coasterInfos))}>Sort</Button>
        <Button onClick={() => setCoasterInfos(sortByRanking(coasterInfos))}>Sort</Button>
        {coasterInfos.map(info => (
          <CardWrapper key={info.id}>
            <CoasterCard name={info.name} ranking={info.ranking} image={info.pic} />
          </CardWrapper>
        ))}
      </ThemeProvider>
    </>
  );
}
