import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from '@theme';
import ErrorBoundary from '@components/ErrorBoundary';
import Header from '@components/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { routes } from '@constants';

export default () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <ErrorBoundary fallback="Something went wrong. Try to reload the page">
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
