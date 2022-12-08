import { Row, Stack, Form, Col, Container, Button } from 'react-bootstrap';
import { lazy, useRef } from 'react';
import { VerificationProps } from '../type/Auth';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));
const AuthBtn = lazy(() => import('../components/Authbtn'));

const NewPassword = ({ verifyEmail }: VerificationProps) => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <Container className='mt-3'>
      <Stack className='mb-3' direction='horizontal' gap={3}>
        <Button className='rounded-pill'>Sign In</Button>
        <div className='line'>Email Verification</div>
      </Stack>
      <Row className='mt-5'>
        <Col>
          <p>
            A six digit code was sent to your email. Please provide the code
            that was sent in field below to continue this process.
          </p>
          <Col md={9}>
            <Form>
              <Stack gap={3} className='mt-5'>
                <InputField
                  name='Verification code'
                  label='Enter 6 digit code'
                  type='text'
                  placeholder='Enter code'
                  error=''
                  fieldRef={fieldText}
                />

                <InputField
                  name='New password'
                  label='Enter New Password'
                  type='password'
                  placeholder='Enter Password'
                  error=''
                  fieldRef={fieldText}
                />
                <InputField
                  name='Confirm password'
                  label='Repeat one last time'
                  type='password'
                  placeholder='Enter Password'
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
export default NewPassword;
