import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NotFound() {
  return (
    <Container fluid style={{ marginTop: "5%" }}>
      <Row className="justify-content-center">
        <Col lg="7" xl="7" className="ruleDetail">
          <Row className="justify-content-center">
            <label style={{ fontSize: '35px' }}>404!!!</label>
          </Row>
          <Row className="justify-content-center">
            <p style={{ textAlign: 'justify', padding: '20px' }}>Invalid Page!!!</p>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
