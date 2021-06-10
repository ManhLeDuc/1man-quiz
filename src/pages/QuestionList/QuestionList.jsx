import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionItem from './QuestionItem/QuestionItem';
import Pagination from './CustomPagination/Pagination';

import './style.css';

export default function QuestionList() {

  return (
    <Container fluid style={{ marginTop: "5%" }}>
      <Row className="justify-content-center">
        <Col lg="9" xl="9">
          <QuestionItem></QuestionItem>
          <QuestionItem></QuestionItem>
          <QuestionItem></QuestionItem>
          <QuestionItem></QuestionItem>
          <QuestionItem></QuestionItem>
          <QuestionItem></QuestionItem>
          <QuestionItem></QuestionItem>
          <QuestionItem></QuestionItem>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Pagination></Pagination>
      </Row>
    </Container>
  )
}
