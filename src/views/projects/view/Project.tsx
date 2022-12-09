import React, { lazy, Suspense, useRef } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';

const Navbar = lazy(() => import('../components/Navbar/Navbar'));
const ProjectImage = lazy(() => import('../components/ProjectImage'));
const InputField = lazy(() => import('../../auth/components/InputField'));

const Project = () => {
  const fieldText = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Navbar path='Projects' />
      <main>
        <Container fluid className='pt-4'>
          <Row className='gap-5'>
            <ProjectImage />
            <Col>
              <Stack className='mb-5'>
                <p>Use an Existing Template</p>
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
        </Container>
      </main>
    </>
  );
};
export default Project;
