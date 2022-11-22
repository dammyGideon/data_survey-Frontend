import { Button } from 'react-bootstrap';

type ButtonProps = {
  title: string;
  variant?: string;
  btnStyle?: string;
  size?: string;
  children?: React.ReactNode;
};

const AuthBtn = ({ children, title, variant, btnStyle, size }: ButtonProps) => {
  return (
    <Button variant={variant} className={btnStyle}>
      {children}
      {title}
    </Button>
  );
};
export default AuthBtn;
