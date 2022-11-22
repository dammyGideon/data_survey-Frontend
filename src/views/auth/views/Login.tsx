import Dashboard from '../../Dashboard';
import { lazy } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useRef } from 'react';
import facebook from '../../../assets/facebook.svg';
import google from '../../../assets/google.svg';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));
const AuthBtn = lazy(() => import('../components/Authbtn'));

const LoginPage = () => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <main>
      <Container className='mt-3'>
        <Stack className='mb-3' direction='horizontal' gap={3}>
          <div>Sign in</div>
          <AuthBtn title='Create an Account' btnStyle='rounded-pill' />
        </Stack>
        <Row>
          {/* col container */}
          <Col>
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
                <AuthBtn title='Sign In' size='lg' />
                <strong className='text-center text-uppercase text-primary'>
                  or
                </strong>
                <Stack direction='horizontal' gap={4}>
                  <AuthBtn variant='outline-primary' title='Google sign in'>
                    <img src={google} alt='google icon' className='mx-1' />
                  </AuthBtn>

                  <AuthBtn
                    variant='outline-primary'
                    title='Facebook sign in'
                    btnStyle='ms-auto'
                  >
                    <img src={facebook} alt='facebook icon' className='mx-1' />
                  </AuthBtn>
                </Stack>
              </Stack>
              <div className='mt-5'>
                <p>
                  Not a member yet, <span>Create an Account?</span>
                </p>
              </div>
            </Col>
          </Col>
          <Col>
            <AuthSiderBar />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default LoginPage;
