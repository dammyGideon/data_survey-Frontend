import { lazy } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useRef } from 'react';
import facebook from '../../../assets/facebook.svg';
import google from '../../../assets/google.svg';
import wave from '../../../assets/wave.svg';
import loginImg from '../../../assets/login-img.png';

const InputField = lazy(() => import('../components/InputField'));

const LoginPage = () => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <main>
      <Container className='mt-3'>
        <Stack className='mb-3' direction='horizontal' gap={3}>
          <div>Sign in</div>
          <Button className='rounded-pill'>Create an account</Button>
        </Stack>
        <Row>
          {/* col container */}
          <Col>
            <Col md={9}>
              {/* form component */}
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
                    <img src={google} alt='google icon' /> Google sign in
                  </Button>
                  <Button variant='outline-primary' className=' ms-auto'>
                    <img src={facebook} alt='facebook icon' /> Facebook sign in
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
