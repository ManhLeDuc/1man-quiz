import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import background from "../../assets/bg.jpg";
import Image from 'react-bootstrap/Image';

const styles = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

export default function Profile() {
  return (
    <div style={styles}>
      <CustomNavbar></CustomNavbar>
      <Container fluid style={{ marginTop: "5%" }}>
        <Row className="justify-content-center">
          <Col lg="9" xl="9">
            <Row className="justify-content-center my-5">

              <Image src="holder.js/171x180" roundedCircle className="photo" style={{
                height: '250px',
                width: '250px'
              }} />

            </Row>
            <Row className="justify-content-center my-5">
              <Col sm="6" md="6" lg="3" xl="3">
                <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Upload</Button>
              </Col>
            </Row>
            <Row className="justify-content-around my-5">
              <Col sm="6" md="6" lg="6" xl="6">
                <input className='info' placeholder='NickName'></input>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  )
}
