import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from "./Menu/Menu";

export default function Home() {
  return (
    <Container fluid style={{ marginTop: "5%" }}>
      <Row className="justify-content-center">
        <Menu></Menu>
      </Row>
      <Row className="justify-content-end">
        <Col sm="3" md="3" lg="3" xl="3">
          <Button variant="secondary">Rule</Button>
        </Col>
      </Row>
    </Container>
  )
}
