import { Button } from 'react-bootstrap';

type ButtonProps = {
  title: string;
  variant?: string;
  btnStyle?: string;
  size?: 'sm' | 'lg';
  children?: React.ReactNode;
};

const AuthBtn = ({ children, title, variant, btnStyle, size }: ButtonProps) => {
  return (
    <Button variant={variant} className={btnStyle} size={size}>
      {children}
      {title}
    </Button>
  );
};
export default AuthBtn;
