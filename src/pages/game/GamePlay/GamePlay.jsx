import React from 'react'
import Answer from '../Answer/Answer';
import Question from '../Question/Question';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function GamePlay() {
  return (
    <Row className="justify-content-md-center">

      <Container fluid>
        <Row className="justify-content-center my-4">
          <Question></Question>
        </Row>
        <Row className="justify-content-between my-lg-4 my-md-4">
          <Answer></Answer>
          <Answer></Answer>
        </Row>
        <Row className="justify-content-between my-lg-4 my-md-4">
          <Answer></Answer>
          <Answer></Answer>
        </Row>
      </Container>
    </Row>
  )
}
