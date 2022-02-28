import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience";
import {TechStack } from './components/TechStack';
import { Languages } from "./components/Languages";
import { Education } from "./components/Education";

function App() {
  return (
    <>
      <Container className="mt-4">
        <Header />
        <Row>
          <Col className='me-5'>
            <Summary />
            <TechStack/>
            <Languages />
          </Col>
          <Col>
            <Experience />
            <Education />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
