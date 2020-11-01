//react notes app

import React from "react";
import NavbarHeader from "./components/navbar";
import NotesTaker from "./components/notetaker";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <NavbarHeader />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="App">
            <div className="Main">
              <NotesTaker />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
