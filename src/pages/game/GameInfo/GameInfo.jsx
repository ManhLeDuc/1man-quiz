import React from 'react'
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';

export default function GameInfo({remains, currentScore}) {
  return (
    <Row className="justify-content-between my-lg-4 my-md-4">
      <Col sm="6" md="6" lg="6" xl="6">
        <Alert variant='dark' style={{textAlign: "center"}}>
          Score: {currentScore}
        </Alert>
      </Col>
      <Col sm="3" md="3" lg="3" xl="3" style={{textAlign: "center"}}>
        <Alert variant='dark'>
          Left: {remains}
        </Alert>
      </Col>
    </Row>
  )
}
