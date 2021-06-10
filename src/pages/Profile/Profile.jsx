import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import './style.css';



export default function Profile() {
  return (
    <Container fluid style={{ marginTop: "5%" }}>
      <Row className="justify-content-center">
        <Col lg="9" xl="9">
          <Row className="justify-content-around my-5">
            <Col sm="6" md="6" lg="3" xl="3">
              <Image src="holder.js/171x180" roundedCircle style={{
                height: '200px',
                width: '200px'
              }} />
            </Col>
            <Col sm="9" md="9" lg="6" xl="6" className="align-items-center">
              <Row className='my-lg-4'>
                <div className='info'>NickName</div>
              </Row>
              <Row className='my-lg-4'>
                <div className='info'>Best Score</div>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-around my-5" >
            <Col sm="9" md="9" lg="5" xl="5">
              <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Update</Button>
            </Col>
            <Col sm="9" md="9" lg="5" xl="5">
              <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Your Questions</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
