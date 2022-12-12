import React, { lazy, useRef } from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';

const ProjectImage = lazy(() => import('../components/ProjectImage'));
const InputField = lazy(() => import('../../auth/components/InputField'));

const CreateFromScratch = () => {
  const fieldText = useRef<HTMLInputElement | null>(null);
  return (
    <Row className='gap-5'>
      <ProjectImage />
      <Col>
        <Stack className='mb-5'>
          <p>Create from scratch</p>
        </Stack>
        <Col xs={6}>
          <Stack className='mb-3'>
            <h2>Create a New Project</h2>
            <p>Customer Satisfaction (CSAT)</p>
          </Stack>
          <Stack className='mb-5'>
            <InputField
              name='Name'
              label='Name'
              type='text'
              placeholder='Utilities project'
              error=''
              fieldRef={fieldText}
            />
            <InputField
              name='Name'
              label='Name'
              type='text'
              placeholder='Utilities project'
              error=''
              fieldRef={fieldText}
            />
          </Stack>
          <Stack>
            <Button variant='primary' className='mb-2'>
              Create Project
            </Button>
            <Button variant='secondary'>Cancel</Button>
          </Stack>
        </Col>
      </Col>
    </Row>
  );
};
export default CreateFromScratch;
