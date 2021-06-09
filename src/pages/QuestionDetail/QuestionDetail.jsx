import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GamePlay from '../../components/GamePlay/GamePlay';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import background from "../../assets/bg.jpg";

const styles = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

const QuestionDetail = () => {
  return (
    <div style={styles}>
      <CustomNavbar></CustomNavbar>
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
            <GamePlay></GamePlay>
            <Row className="justify-content-end my-lg-4 my-md-4" >
              <Col sm="3" md="3" lg="3" xl="3">
                <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Confirm</Button>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default QuestionDetail;
