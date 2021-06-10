import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import './style.css';

const QuestionDetail = () => {
  return (
    <Container fluid style={{ marginTop: "140px" }}>
      <Row className="justify-content-center">
        <Col lg="10">
          <Row className="justify-content-between my-lg-4 my-md-4">
            <Col sm="4" md="4" lg="4" xl="4">
              <Alert variant='dark' style={{ textAlign: "center" }}>
                isActive
                </Alert>
            </Col>
            <Col sm="4" md="4" lg="4" xl="4">
              <Row>
                <Col sm="6" md="6" lg="6" xl="6">
                  <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Update</Button>
                </Col>
                <Col sm="6" md="6" lg="6" xl="6">
                  <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Delete</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">

            <Container fluid>
              <Row className="justify-content-center my-4">
                <Col>
                  <div
                    className="question"
                    onClick={() => { }}
                  >
                    {"hello"}
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-between my-lg-4 my-md-4">
                <Col sm="5" md="5" lg="5" xl="5">
                  <div
                    className="answerDetail"
                  >
                    {"hello"}
                  </div>
                </Col>
                <Col sm="5" md="5" lg="5" xl="5">
                  <div
                    className="answerDetail"
                  >
                    {"hello"}
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-between my-lg-4 my-md-4">
                <Col sm="5" md="5" lg="5" xl="5">
                  <div
                    className="answerDetail"
                  >
                    {"hello"}
                  </div>
                </Col>
                <Col sm="5" md="5" lg="5" xl="5">
                  <div
                    className="answerDetail"
                  >
                    {"hello"}
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="justify-content-end my-lg-4 my-md-4" >
            <Col sm="3" md="3" lg="3" xl="3">
              <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Confirm</Button>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  );
};

export default QuestionDetail;
