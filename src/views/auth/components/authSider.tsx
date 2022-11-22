import { Stack, Col } from 'react-bootstrap';
import wave from '../../../assets/wave.svg';
import loginImg from '../../../assets/login-img.png';

const AuthSiderBar = () => {
  return (
    <>
      <Stack className='mx-auto'>
        <Col xs={3} className='mx-auto text-center'>
          <img src={wave} alt='waving hand icon' />
        </Col>
        <Col className='text-center'>
          <h2>Welcome back</h2>
          <p>Enter your email and password to experience wonders</p>
        </Col>

        <Col xs={3}>
          <img src={loginImg} alt='illustration' />
        </Col>
      </Stack>
    </>
  );
};

export default AuthSiderBar;
