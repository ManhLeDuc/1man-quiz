import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import background from "../../assets/bg.jpg";
import QuestionItem from './QuestionItem/QuestionItem';
import Pagination from './CustomPagination/Pagination';

import './style.css';

const styles = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

export default function QuestionList() {

  return (
    <div style={styles}>
      <CustomNavbar></CustomNavbar>
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
    </div>
  )
}
