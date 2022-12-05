interface AuthProps {
  createEmail?: () => void;
  createAccount?: () => void;
  createPassword?: () => void;
}
export interface VerificationProps {
  forgotPassword?: () => void;
  verifyEmail?: () => void;
  setPassword?: () => void;
}

export default AuthProps;
