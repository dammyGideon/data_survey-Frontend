import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import React, { lazy } from 'react';
import './ProjectSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectSection = () => {
  return (
    <Container className='project-section'>
      <Row>
        <Col xs={3} className='bg-light border py-2 text-center'>
          Use an existing Project
        </Col>
        <Col xs={3} className='bg-light border py-2 text-center'>
          Create From Scratch
        </Col>
      </Row>

      <Row className='mt-5 py-4 rounded-3 mx-auto cta'>
        <Col xs={2}>Image</Col>
        <Col>
          <Stack>Project Template</Stack>
          <Stack>
            Begin your project by using a template on your subject designed by
            expert in the selected field
          </Stack>
        </Col>
        <Col xs={3} className='align-self-end'>
          <Button className='px-4'>See all</Button>
        </Col>
      </Row>
      <section className='card-section'>
        <Row className='pt-5' gap={3}>
          <ProjectCard />
        </Row>
      </section>
    </Container>
  );
};
export default ProjectSection;
