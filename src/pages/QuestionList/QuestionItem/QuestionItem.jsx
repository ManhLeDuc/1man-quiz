import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

export default function QuestionItem() {
  return (
    <Row className='my-2'>
      <Col sm="4" md="4" lg="4" xl="4" className='field text-truncate'>Question hellooooooooooooooooooooooooo</Col>
      <Col sm="2" md="2" lg="2" xl="2" className='field'>Date</Col>
      <Col sm="2" md="2" lg="2" xl="2" className='field'>isActive</Col>
      <Col sm="2" md="2" lg="2" xl="2" className='field'>Detail</Col>
      <Col sm="2" md="2" lg="2" xl="2" className='field'>Change</Col>
    </Row>
  )
}
