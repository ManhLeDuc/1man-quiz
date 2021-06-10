import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

export default function QuestionList() {

  return (
    <Container fluid style={{ marginTop: "5%" }}>
      <Row className="justify-content-center">
        <Col lg="7" xl="7" className="ruleDetail">
          <Row className="justify-content-center">
            <label style={{ fontSize: '35px' }}>ゲームルール</label>
          </Row>
          <Row className="justify-content-center">
            <p style={{ textAlign: 'justify', padding: '20px' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
