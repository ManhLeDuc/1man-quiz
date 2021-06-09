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
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
