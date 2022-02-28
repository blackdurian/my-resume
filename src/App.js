import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Container className="mt-4">
        <Header />
        <Row>
          <Col>
            <Summary />
          </Col>
          <Col>
            <Experience />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
