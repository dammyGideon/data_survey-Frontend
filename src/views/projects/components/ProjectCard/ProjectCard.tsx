import Card from 'react-bootstrap/Card';
import { Button, Col } from 'react-bootstrap';
import './ProjectCard.css';
import cardImage from '../../../../assets/card-img.png';

const ProjectCard = () => {
  return (
    <>
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Dark'].map(
        (variant) => (
          <Col w-xs-100 md={6} xl={4}>
            <Card key={variant} className='mb-4 '>
              <Card.Header>2 weeks</Card.Header>
              <Card.Body className='mb-4 px-3 px-4 position-relative'>
                <div className={`card-img bg-${variant.toLowerCase()}`}>
                  <img src={cardImage} alt='card icon' />
                </div>

                <Card.Title className='mt-4'>
                  Tour on CRM Environment{' '}
                </Card.Title>
                <Card.Text className='mb-4'>
                  Explore and enjoy our different Q & A section
                </Card.Text>
                <Button variant='light' className='w-100 '>
                  More Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      )}
    </>
  );
};
export default ProjectCard;
