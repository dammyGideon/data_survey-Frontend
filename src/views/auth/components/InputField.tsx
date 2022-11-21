import { Form } from 'react-bootstrap';
import FormVariables from '../type/Form';

const InputField = ({
  name,
  label,
  type,
  placeholder,
  error,
  fieldRef,
}: FormVariables) => {
  return (
    <Form.Group controlId={name} className='InputField'>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type || 'text'}
        placeholder={placeholder}
        ref={fieldRef}
      ></Form.Control>
      {/* shouldnt this be conditionally rendered? */}
      <Form.Text className='text-danger'>{error}</Form.Text>
    </Form.Group>
  );
};

export default InputField;
