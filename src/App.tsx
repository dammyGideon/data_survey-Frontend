import React, { lazy } from 'react';
import Container from 'react-bootstrap/esm/Container';

const AuthRoute = lazy(() => import('./routes/auth'));

const App = () => {
  return (
    <>
      <AuthRoute />
    </>
  );
};

export default App;
