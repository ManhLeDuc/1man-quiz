import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

import { authenticationService } from '../../services/authentication.service';
import { authHeader } from '../../helpers';


class Rank extends React.Component {

  constructor(props) {
    super(props);

    if (!authenticationService.currentUserValue) {
      window.location.href = '/'
    }
    else {
      this.state = {
        answers: ["", "", "", ""],
        question: "",
        remains: 0,
        currentScore: 0,
      };
    }


  }

  componentDidMount() {

  }

  render() {
    return (
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
    )
  }
}

export default Rank;