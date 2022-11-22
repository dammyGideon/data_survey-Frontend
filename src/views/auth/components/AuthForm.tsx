import { Form, Stack } from 'react-bootstrap';
import { useRef, lazy } from 'react';

const InputField = lazy(() => import('./InputField'));

type FormProps = {
  children: React.ReactNode;
};

const AuthForm = ({ children }: FormProps) => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
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
      {children}
    </Form>
  );
};
export default AuthForm;
