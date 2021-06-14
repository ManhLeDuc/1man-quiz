import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { authenticationService } from '../../../services/authentication.service';

import './style.css';

export default function QuestionItem({ question, questionId, isActive, createAt }) {
  const date = new Date(createAt)
  const className = isActive ? "activeItem" : "notActiveItem"

  const detailHandle = () => {
    window.location.href = `/questions/detail/${questionId}`;
  }

  const updateHandle = () => {

    if (authenticationService.currentUserValue && authenticationService.currentUserValue.isAdmin) {
      window.location.href = `/questions/update/${questionId}`;
      return;
    }

    else if (!isActive) {
      window.location.href = `/questions/update/${questionId}`;
      return;
    }
    return;
  }

  return (
    <Row className={`my-2 ${className}`}>
      <Col sm="5" md="5" lg="5" xl="5" className='field1 text-truncate'>{question}</Col>
      <Col sm="3" md="3" lg="3" xl="3" className='field1'>{`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`}</Col>
      <Col sm="2" md="2" lg="2" xl="2" className='field' onClick={detailHandle}>Detail</Col>
      <Col sm="2" md="2" lg="2" xl="2" className='field' onClick={updateHandle}>Change</Col>
    </Row>
  )
}
