import React, { lazy } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';

const Select = lazy(() => import('../components/SelectBar/Select'));
const ProjectCard = lazy(() => import('../components/ProjectCard/ProjectCard'));
const ProjectSection = lazy(
  () => import('../components/ProjectSection/ProjectSection')
);

const Catalog = () => {
  return (
    <Container fluid className='pt-4' style={{ height: '100vh' }}>
      <Row className='h-100 '>
        <Col xs={3} className='sidebar'>
          <Stack className='mb-4'>
            <input
              type='text'
              placeholder='Search the catalog'
              className='p-2'
            />
          </Stack>
          <Stack gap={5}>
            <div className='mb-5'>
              <Select
                category='Type'
                options={[
                  'Customers',
                  'Employees',
                  'Markets',
                  'Resident',
                  'Students',
                ]}
              />
              <Select
                category='Type'
                options={[
                  'Customers',
                  'Employees',
                  'Markets',
                  'Resident',
                  'Students',
                ]}
              />
              <Select
                category='Type'
                options={[
                  'Customers',
                  'Employees',
                  'Markets',
                  'Resident',
                  'Students',
                ]}
              />
            </div>
            <div>
              <b>Back to home</b>
            </div>
          </Stack>
        </Col>
        <Col>
          <h2>Create a Project</h2>
          <ProjectSection />
        </Col>
      </Row>
    </Container>
  );
};
export default Catalog;
