import { Button, Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';
import UserForm from '../components/UserForm';
import CreatePassword from '../components/CreatePassword';
import CreateEmail from '../components/CreateEmail';

type Pages = 'Create Account' | 'Create Email' | 'Create Password';

const RegistrationPage = () => {
  const [currentPage, setcurrentPage] = useState<Pages>('Create Email');

  const onEmailSubmit = () => {
    setcurrentPage('Create Account');
  };

  const onCreateAccount = () => {
    setcurrentPage('Create Password');
  };
  // const showAccountComponent = () => {
  //   setCreateEmail(false);
  // };
  // const showCreatePassword = () => {
  //   setCreateAccount(true);
  // };

  // const renderPage = ()=>{
  //   <div>
  // {(currentPage === "CreateEmail") ? <CreateEmail> : (currentPage === "CreateAccount") ? <UserForm/> : currentPage === "CreatePassword": <CreatePassword/>;}

  //   </div>
  // }

  return (
    <main>
      <Container className='mt-5'>
        <Stack className='mb-3' direction='horizontal' gap={3}>
          <Button className='rounded-pill'>Sign in</Button>
          <div className='line'>Create an Account</div>
        </Stack>
        <Row className='mt-5'>
          {currentPage === 'Create Email' ? (
            <CreateEmail createEmail={onEmailSubmit} />
          ) : currentPage === 'Create Account' ? (
            <UserForm createAccount={onCreateAccount} />
          ) : (
            <CreatePassword />
          )}
        </Row>
      </Container>
    </main>
  );
};
export default RegistrationPage;
