import { ThemeProvider } from 'styled-components';
import theme from 'constants';
import GlobalStyle from 'GlobalStyle';
import AppContainer from './App.styled';

import SearchResult from './components';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <SearchResult />
      </AppContainer>
    </ThemeProvider>
  );
};
