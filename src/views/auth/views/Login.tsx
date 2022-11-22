import { Col, Container, Row, Stack } from 'react-bootstrap';
import { lazy } from 'react';

import facebook from '../../../assets/facebook.svg';
import google from '../../../assets/google.svg';
import wave from '../../../assets/wave.svg';
import loginImg from '../../../assets/login-img.png';
const AuthForm = lazy(() => import('../components/AuthForm'));
const AuthBtn = lazy(() => import('../components/AuthBtn'));

const LoginPage = () => {
  return (
    <main>
      <Container className='mt-3'>
        <Stack className='mb-3' direction='horizontal' gap={3}>
          <div>Sign in</div>
          <AuthBtn title='Create an account' btnStyle='rounded-pill' />
        </Stack>
        <Row>
          {/* col container */}
          <Col>
            <Col md={9}>
              {/* form component */}
              <AuthForm>
                <Stack gap={2}>
                  <AuthBtn title='Sign in' variant='primary' size='lg' />
                  <strong className='text-center text-uppercase text-primary'>
                    or
                  </strong>
                  <Stack direction='horizontal' gap={4}>
                    <AuthBtn variant='outline-primary' title='Google Sign in'>
                      <img src={google} alt='google icon' className='px-1' />
                    </AuthBtn>
                    <AuthBtn
                      variant='outline-primary'
                      btnStyle=' ms-auto'
                      title='Facebook sign in'
                    >
                      <img
                        src={facebook}
                        alt='facebook icon'
                        className='px-1'
                      />
                    </AuthBtn>
                  </Stack>
                </Stack>
              </AuthForm>

              <div className='mt-5'>
                <p>
                  Not a member yet, <span>Create an Account?</span>
                </p>
              </div>
            </Col>
          </Col>
          <Col>
            <Stack className='mx-auto'>
              <Col xs={3} className='mx-auto text-center'>
                <img src={wave} alt='waving hand icon' className='' />
              </Col>
              <Col className='text-center'>
                <h2>Welcome back</h2>
                <p>Enter your email and password to experience wonders</p>
              </Col>

              <Col xs={3}>
                <img src={loginImg} alt='illustration' />
              </Col>
            </Stack>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default LoginPage;
