import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { authHeader } from '../../helpers';

import './style.css';

import { authenticationService } from '../../services/authentication.service';

class Rank extends React.Component {

  constructor(props) {
    super(props);

    if (!authenticationService.currentUserValue) {
      window.location.href = '/'
    }
    else {
      this.state = {
        topPlayer: [],
        topPlayerNum: 0,
        yourBestScore: -1,
        yourName: "",
      };
    }
  }

  componentDidMount() {

    fetch(`127.0.0.1:3001/api/topRank`, {
      method: 'GET',
      headers: authHeader(),
      credentials: 'include',

    })
      .then((res) => { return res.json(); })
      .then((data) => {
        if (data.success && data.data) {
          this.setState({
            topPlayer: data.data,
            topPlayerNum: data.data.length,
          });
        }
        else {
          window.alert("Can't get Top Player Info");
        }
      })
      .catch((error) => {
        console.log(error);
      });


    if (authenticationService.currentUserValue) {
      fetch(`127.0.0.1:3001/api/me`, {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',

      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.name) {
            this.setState({
              yourBestScore: data.bestScore,
              yourName: data.name,
            });
          }
          else {
            this.setState({
              yourBestScore: -1,
            });
            window.alert("Something went wrong, please refresh page!!!")
          }

        })
        .catch((error) => {
          window.alert(error);
        });
    }
  }

  render() {
    return (
      <Container fluid style={{ marginTop: "5%" }}>
        <Row className="justify-content-center">
          <Col lg="9" xl="9">
            {
              this.state.topPlayerNum > 0 ? (<Row className="gold my-5">
                <Col sm="3" md="3" lg="3" xl="3" >1</Col>
                <Col sm="6" md="6" lg="6" xl="6" >{this.state.topPlayer[0].name}</Col>
                <Col sm="3" md="3" lg="3" xl="3" >{this.state.topPlayer[0].bestScore}</Col>
              </Row>) : (<div></div>)
            }
            {
              this.state.topPlayerNum > 1 ? (<Row className="silver my-5">
                <Col sm="3" md="3" lg="3" xl="3" >2</Col>
                <Col sm="6" md="6" lg="6" xl="6" >{this.state.topPlayer[1].name}</Col>
                <Col sm="3" md="3" lg="3" xl="3" >{this.state.topPlayer[1].bestScore}</Col>
              </Row>) : (<div></div>)
            }
            {
              this.state.topPlayerNum > 2 ? (<Row className="bronze my-5">
                <Col sm="3" md="3" lg="3" xl="3" >3</Col>
                <Col sm="6" md="6" lg="6" xl="6" >{this.state.topPlayer[2].name}</Col>
                <Col sm="3" md="3" lg="3" xl="3" >{this.state.topPlayer[2].bestScore}</Col>
              </Row>) : (<div></div>)
            }

            <Row className="yourRank my-5">
              <Col sm="3" md="3" lg="3" xl="3" >You</Col>
              <Col sm="6" md="6" lg="6" xl="6" >{this.state.yourName}</Col>
              <Col sm="3" md="3" lg="3" xl="3" >{this.state.yourBestScore}</Col>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Rank;