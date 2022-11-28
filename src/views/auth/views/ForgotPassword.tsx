import { lazy } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useRef } from 'react';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));

const ForgotPassword = () => {
  const fieldText = useRef<HTMLInputElement | null>(null);

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
              </Stack>

              <Stack direction='horizontal' gap={3} className='mt-2 mb-5'>
                <Form.Check type='checkbox' label='keep me logged in' />
                <div className='ms-auto'>Forgot password?</div>
              </Stack>
            </Form>

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
  </main>;
};
export default ForgotPassword;

// const LoginPage = () => {
//    const fieldText = useRef<HTMLInputElement | null>(null);

//   return (

//   );
// };

// export default LoginPage;
