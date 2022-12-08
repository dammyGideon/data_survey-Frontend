interface AuthProps {
  createEmail?: () => void;
  createAccount?: () => void;
  createPassword?: () => void;
}
export interface VerificationProps extends AuthProps {
  forgotPassword?: () => void;
  verifyEmail?: () => void;
  setPassword?: () => void;
}

export default AuthProps;
