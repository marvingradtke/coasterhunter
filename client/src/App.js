import React from 'react';
// import CoasterCard from '../src/components/CoasterCard';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import Header from './components/Header.js';
// import { useState } from 'react';
// import { sortByName, sortByRanking, sortBySpeed } from './utils/sortFunctions';
import CoasterList from './components/pages/CoasterList';
import DetailPage from './components/pages/DetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const CardWrapper = styled.div``;

// const Margin = styled.div`
//   margin-top: 100px;
// `;

// const Button = styled.button`
//   background: black;
//   color: wheat;
// `;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
`;

export default function App() {
  // const [coasterInfos, setCoasterInfos] = useState([]);

  // async function getCoasterInfos() {
  //   const response = await fetch('http://localhost:8080/coasters');
  //   const newCoasters = await response.json();
  //   setCoasterInfos(newCoasters);
  // }
  // React.useEffect(() => {
  //   getCoasterInfos();
  // }, []);

  return (
    <>
      <ThemeProvider theme={main}>
        <GlobalStyles />
        <Header />
        <Router>
          <Container>
            <Switch>
              <Route exact path="/">
                <CoasterList />
              </Route>
              <Route exact path="/details">
                <DetailPage />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

/* <Button onClick={() => setCoasterInfos(sortByName(coasterInfos))}>Name</Button>
        <Button onClick={() => setCoasterInfos(sortByRanking(coasterInfos))}>Rank</Button>
        <Button onClick={() => setCoasterInfos(sortBySpeed(coasterInfos))}>Speed</Button>*/
