import { Button } from 'react-bootstrap';

type ButtonProps = {
  title: string;
  variant?: string;
  btnStyle?: string;
  size?: 'sm' | 'lg';
  children?: React.ReactNode;
  handleClick?: () => void;
};

const AuthBtn = ({
  children,
  title,
  variant,
  btnStyle,
  size,
  handleClick,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      className={btnStyle}
      size={size}
      onClick={handleClick}
    >
      {children}
      {title}
    </Button>
  );
};
export default AuthBtn;
