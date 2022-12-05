import { Row, Stack, Form, Col, Container, Button } from 'react-bootstrap';
import { lazy, useRef } from 'react';
import { VerificationProps } from '../type/Auth';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));
const AuthBtn = lazy(() => import('../components/Authbtn'));

const EmailVerification = ({ verifyEmail }: VerificationProps) => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <Container className='mt-3'>
      <Stack className='mb-3' direction='horizontal' gap={3}>
        <Button className='rounded-pill'>Sign In</Button>
        <div>Email Verification</div>
      </Stack>
      <Row className='mt-5'>
        <Col>
          <Col md={9}>
            <Form className='pt-3'>
              <Stack gap={3} className='mt-5'>
                <InputField
                  name='Email'
                  label='Email'
                  type='email'
                  placeholder='Enter linked Email'
                  error=''
                  fieldRef={fieldText}
                />
              </Stack>
            </Form>

            <div className='mt-5 d-grid '>
              <AuthBtn
                title='Submit'
                size='lg'
                btnStyle='mb-3'
                handleClick={verifyEmail}
              />
              <p>Not registered yet? Create an Account</p>
            </div>
          </Col>
        </Col>

        <Col sm={12} md={6}>
          <AuthSiderBar
            title='Reset Password'
            info='Please enter new password sent to your email!'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EmailVerification;
