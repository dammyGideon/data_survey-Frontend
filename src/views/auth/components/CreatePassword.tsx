import { lazy } from 'react';
import { Col, Form, Stack } from 'react-bootstrap';
import { useRef } from 'react';
import AuthBtn from '../components/Authbtn';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));

type Props = {
  showComponent?: () => void;
};

const CreatePassword = ({ showComponent }: Props) => {
  const fieldText = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <Col>
        <Col md={9}>
          <Form>
            <Stack gap={3} className='mt-5'>
              <InputField
                name='password'
                label='Create your Password'
                type='text'
                placeholder='Please enter your password'
                error=''
                fieldRef={fieldText}
              />
              <InputField
                name='password'
                label='Confirm Password'
                type='text'
                placeholder='Confirm your password'
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
              handleClick={showComponent}
            />
          </div>
        </Col>
      </Col>
      <Col sm={12} md={6}>
        <AuthSiderBar
          title='Create Password'
          info='Enter your email to easily create your account Account!'
        />
      </Col>
    </>
  );
};
export default CreatePassword;
