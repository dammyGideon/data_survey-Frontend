import { Stack, Col } from 'react-bootstrap';
import loginImg from '../../../assets/login-img.png';

import SiderProps from '../type/Sider';

const AuthSiderBar = ({ title, info, children }: SiderProps) => {
  return (
    <Stack className='mx-auto'>
      <Col xs={1} className='mx-auto text-center'>
        {children}
      </Col>

      <Col className='text-center pb-3'>
        <h2>{title}</h2>
        <p>{info}</p>
      </Col>

      <Col>
        <Col>
          <img src={loginImg} alt='illustration' />
        </Col>
      </Col>
    </Stack>
  );
};
export default AuthSiderBar;
