import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { routes } from '@constants';

import { GlobalStyles, theme } from '@theme';

import { ScrollToTop } from '@utils';

import { ThemeProvider } from '@emotion/react';

import ErrorBoundary from '@components/ErrorBoundary';

import Header from '@components/Header';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback="Something went wrong. Try to reload the page">
          <Header />
          <ScrollToTop />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </ErrorBoundary>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
};

export default App;
