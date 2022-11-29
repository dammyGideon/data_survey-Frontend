import { lazy } from 'react';
import { Col, Form, Stack } from 'react-bootstrap';
import { useRef } from 'react';
import AuthBtn from '../components/Authbtn';
import AuthProps from '../type/Auth';

const InputField = lazy(() => import('../components/InputField'));
const AuthSiderBar = lazy(() => import('../components/authSider'));

const UserForm = ({ createAccount }: AuthProps) => {
  const fieldText = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <Col>
        <Col md={9}>
          <Form>
            <Stack gap={3} className='mt-2'>
              <InputField
                name='lirst-name'
                label='First Name'
                type='text'
                placeholder='Please enter your first name'
                error=''
                fieldRef={fieldText}
              />
              <InputField
                name='last-name'
                label='Last Name'
                type='text'
                placeholder='Please enter your last name'
                error=''
                fieldRef={fieldText}
              />
              <InputField
                name='business-name'
                label='Business Name'
                type='text'
                placeholder='Please enter your business name'
                error=''
                fieldRef={fieldText}
              />
              <InputField
                name='industry'
                label='Industry'
                type='text'
                placeholder='Select your Industry'
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
              handleClick={createAccount}
            />
          </div>
        </Col>
      </Col>
      <Col sm={12} md={6}>
        <AuthSiderBar
          title='Create your Account'
          info="Let's commence here with your basic corporate details. Please enter accurate information fields"
        />
      </Col>
    </>
  );
};
export default UserForm;
