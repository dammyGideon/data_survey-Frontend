import React, { lazy } from 'react';

const AuthRoute = lazy(() => import('./routes/auth'));

const App = () => {
  return (
    <>
      <AuthRoute />
    </>
  );
};

export default App;
