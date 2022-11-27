import Dashboard from '../../Dashboard';
import { lazy } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useRef } from 'react';
import facebook from '../../../assets/facebook.svg';
import google from '../../../assets/google.svg';

// const Modal = lazy(() => import('../components/AuthModal'));
const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));

const LoginPage = () => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <main>
      <Container className='mt-5'>
        {/* <Modal
          title='success'
          body='Your details have been submitted successfully, and a verificaion notification has been sent to your email. Please verify.'
        /> */}
        <Stack className='mb-3' direction='horizontal' gap={3}>
          <div>Sign in</div>
          <Button className='rounded-pill'>Create an account</Button>
        </Stack>
        <Row>
          {/* col container */}
          <Col md={6}>
            <Col md={9}>
              <Form>
                <Stack gap={1} className='mb-2'>
                  <h3>Sign In</h3>
                  <p>Enter your email and password to sign in</p>
                </Stack>

                <Stack gap={3}>
                  <InputField
                    name='Email'
                    label='Email'
                    type='email'
                    placeholder='Please enter email'
                    error=''
                    fieldRef={fieldText}
                  />
                  <InputField
                    name='Password'
                    label='Password'
                    type='password'
                    placeholder='Password'
                    error=''
                    fieldRef={fieldText}
                  />
                </Stack>

                <Stack direction='horizontal' gap={3} className='mt-2 mb-5'>
                  <Form.Check type='checkbox' label='keep me logged in' />
                  <div className='ms-auto'>Forgot password?</div>
                </Stack>
              </Form>
              <Stack gap={2}>
                <Button size='lg'>Sign In</Button>
                <strong className='text-center text-uppercase text-primary'>
                  or
                </strong>
                <Stack direction='horizontal' gap={4}>
                  <Button variant='outline-primary'>
                    <img
                      src={google}
                      alt='google icon'
                      className='google-img'
                    />{' '}
                    Google sign in
                  </Button>
                  <Button variant='outline-primary' className=' ms-auto'>
                    <img
                      src={facebook}
                      alt='facebook icon'
                      className='fb-img'
                    />{' '}
                    Facebook sign in
                  </Button>
                </Stack>
              </Stack>
              <div className='mt-5'>
                <p>
                  Not a member yet, <span>Create an Account?</span>
                </p>
              </div>
            </Col>
          </Col>

          <Col md={6}>
            <AuthSiderBar />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default LoginPage;
