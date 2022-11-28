import { lazy } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useRef } from 'react';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));

const RegistrationPage = () => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <main>
      <Container className='mt-3'>
        <Stack className='mb-3' direction='horizontal' gap={3}>
          <Button className='rounded-pill'>Sign in</Button>
          <div>Create an Account</div>
        </Stack>
        <Row className='mt-5'>
          {/* col container */}
          <Col>
            <Col md={9}>
              <Form>
                <Stack gap={1} className='mb-2'>
                  <h3>Enter Email</h3>
                  <p>Enter your email and password to sign in</p>
                </Stack>

                <Stack gap={3} className='mt-5'>
                  <InputField
                    name='Email'
                    label='Email'
                    type='email'
                    placeholder='Please enter email'
                    error=''
                    fieldRef={fieldText}
                  />
                </Stack>
              </Form>

              <div className='mt-5 d-grid '>
                <Button size='lg' className='mb-3'>
                  Continue
                </Button>
                <p>
                  Ensure you enter your active email address, verification link
                  will be sent to you!
                </p>
              </div>
            </Col>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
};
export default RegistrationPage;
