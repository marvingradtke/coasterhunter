import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import Header from './components/Header.js';
import CoasterList from './pages/CoasterList';
import DetailPage from './pages/DetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={main}>
        <GlobalStyles />
        <Router>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/coasters">
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
