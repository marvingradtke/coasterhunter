import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'emotion-theming';
import main from '../src/themes/defaultTheme';

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={main}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);
addDecorator(withKnobs);

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
