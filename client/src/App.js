import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles.js';
import main from './themes/defaultTheme.js';
import Header from './components/Header.js';
import CoasterList from './pages/CoasterList';
import Coaster from './pages/Coaster';
import Landing from './pages/Landing';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  padding-top: 100px;
`;

export default function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Router>
        <Container>
          <Switch>
            <Route exact path="/landing">
              <Landing />
            </Route>
            <Route exact path="/">
              <Header />
              <CoasterList />
            </Route>
            <Route exact path="/:coasterId">
              <Header />
              <Coaster />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
