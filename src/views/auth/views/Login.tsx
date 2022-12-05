import Dashboard from '../../Dashboard';
import { lazy, useState } from 'react';

const VerifyEmail = lazy(() => import('../views/EmailVerification'));
const NewPassword = lazy(() => import('../components/NewPassword'));
const LoginComponent = lazy(() => import('../components/LoginComponent'));

type Pages = 'Login' | 'Enter Email' | 'New Password';

const LoginPage = () => {
  const [currentPage, setcurrentPage] = useState<Pages>('Login');

  const forgotPassword = () => {
    setcurrentPage('Enter Email');
  };

  const onEmailSubmit = () => {
    setcurrentPage('New Password');
  };

  const onPasswordReset = () => {
    setcurrentPage('New Password');
  };

  return (
    <main>
      {currentPage === 'Login' ? (
        <LoginComponent forgotPassword={forgotPassword} />
      ) : currentPage === 'Enter Email' ? (
        <VerifyEmail verifyEmail={onEmailSubmit} />
      ) : (
        <NewPassword setPassword={onPasswordReset} />
      )}
    </main>
  );
};

export default LoginPage;
