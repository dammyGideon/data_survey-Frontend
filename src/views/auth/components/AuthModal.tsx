import check from '../../../assets/Check.png';
import Button from 'react-bootstrap/Button';

type ModalProps = {
  title: string;
  body: string;
};

function AuthModal({ title, body }: ModalProps) {
  return (
    <div className='modal'>
      <div className='split'>
        <div className='modal-title'>
          <img src={check} alt='' className='modal-img' />
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
        <div className='modal-btn'>
          <Button variant='primary'>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
