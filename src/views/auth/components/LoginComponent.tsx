import { lazy } from 'react';
import { Button, Col, Form, Row, Stack, Container } from 'react-bootstrap';
import { useRef } from 'react';
import wave from '../../../assets/wave.svg';
import facebook from '../../../assets/facebook.svg';
import google from '../../../assets/google.svg';
import { VerificationProps } from '../type/Auth';

const InputField = lazy(() => import('./InputField'));
const AuthSiderBar = lazy(() => import('./authSider'));

const Login = ({ forgotPassword, createAccount }: VerificationProps) => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <Container className='mt-3'>
      <Stack className='mb-3' direction='horizontal' gap={3}>
        <div className='line'>Sign in</div>
        <Button className='rounded-pill'>Create an account</Button>
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
                <div className='ms-auto'>
                  <Button
                    variant='link'
                    style={{ textDecoration: 'none' }}
                    onClick={forgotPassword}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Stack>
            </Form>
            <Stack gap={2}>
              <Button size='lg'>Sign In</Button>
              <strong className='text-center text-uppercase text-primary'>
                or
              </strong>
              <Stack direction='horizontal' gap={4}>
                <Button variant='outline-primary'>
                  <img src={google} alt='google icon' className='google-img' />
                  Google sign in
                </Button>
                <Button variant='outline-primary' className=' ms-auto'>
                  <img src={facebook} alt='facebook icon' className='fb-img' />
                  Facebook sign in
                </Button>
              </Stack>
            </Stack>
            <div className='mt-5'>
              <p>
                Not a member yet,
                <span>
                  <Button
                    variant='link'
                    style={{ textDecoration: 'none', marginBottom: '2px' }}
                    onClick={createAccount}
                  >
                    Create an Account
                  </Button>
                </span>
              </p>
            </div>
          </Col>
        </Col>
        <Col sm={12} md={6}>
          <AuthSiderBar
            title='Welcome back'
            info='Enter your email and password to experience wonders'
          >
            <img src={wave} alt='waving hand icon' className='wave' />
          </AuthSiderBar>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
