import { lazy } from 'react';
import { Col, Form, Stack } from 'react-bootstrap';
import { useRef } from 'react';
import AuthProps from '../type/Auth';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));
const AuthBtn = lazy(() => import('../components/Authbtn'));

const CreateEmail = ({ createEmail }: AuthProps) => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Col>
        <Col md={9}>
          <Form className='pt-5'>
            <Stack gap={1} className='mb-2'>
              <h3>Enter Email</h3>
              <p>Enter your email and createAccount to sign in</p>
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
            <AuthBtn
              title='Continue'
              size='lg'
              btnStyle='mb-3'
              handleClick={createEmail}
            />
            <p>
              Ensure you enter your active email address, verification link will
              be sent to you!
            </p>
          </div>
        </Col>
      </Col>

      <Col sm={12} md={6}>
        <AuthSiderBar
          title='Enter Email'
          info='Enter your email to easily create a CRM Account!'
        />
      </Col>
    </>
  );
};
export default CreateEmail;
