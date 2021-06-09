import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import background from "../../assets/bg.jpg";

import './style.css';

const styles = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

export default function Rank() {

  return (
    <div style={styles}>
      <CustomNavbar></CustomNavbar>
      <Container fluid style={{ marginTop: "5%" }}>
        <Row className="justify-content-center">
          <Col lg="9" xl="9">
            <Row className="gold my-5">
              <Col sm="3" md="3" lg="3" xl="3" >1</Col>
              <Col sm="6" md="6" lg="6" xl="6" >NickName</Col>
              <Col sm="3" md="3" lg="3" xl="3" >Score</Col>
            </Row>
            <Row className="silver my-5">
              <Col sm="3" md="3" lg="3" xl="3" >2</Col>
              <Col sm="6" md="6" lg="6" xl="6" >NickName</Col>
              <Col sm="3" md="3" lg="3" xl="3" >Score</Col>
            </Row>
            <Row className="bronze my-5">
              <Col sm="3" md="3" lg="3" xl="3" >3</Col>
              <Col sm="6" md="6" lg="6" xl="6" >NickName</Col>
              <Col sm="3" md="3" lg="3" xl="3" >Score</Col>
            </Row>
            <Row className="yourRank my-5">
              <Col sm="3" md="3" lg="3" xl="3" >Your rank: 5</Col>
              <Col sm="6" md="6" lg="6" xl="6" >NickName</Col>
              <Col sm="3" md="3" lg="3" xl="3" >Score</Col>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
