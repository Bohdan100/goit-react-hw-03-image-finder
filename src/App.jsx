import { ThemeProvider } from 'styled-components';
import { theme } from './components/constants/theme';
import { GlobalStyle } from './GlobalStyle';

import { AppContainer } from './App.styled';

import SearchResult from './components/Searchbar/SearchResult';

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
