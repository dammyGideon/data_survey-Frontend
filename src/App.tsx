import { lazy, Suspense } from "react";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter,Route,Routes } from "react-router-dom";


 const LoginPage = lazy(()=>import('./views/auth/views/Login'));
 const RegisterationPage = lazy(()=> import('./views/auth/views/Register'));

const App=()=> {
  return (
      <Container>
        
        <BrowserRouter>
          <Suspense>
              <Routes>
                <Route path="" element={<LoginPage />} />
                <Route path="/register" element = {<RegisterationPage/>} />
              </Routes>
          </Suspense>
        </BrowserRouter>

      </Container>
  );
}

export default App;
