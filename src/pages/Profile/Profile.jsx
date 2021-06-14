import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { authenticationService } from '../../services/authentication.service';
import { authHeader } from '../../helpers';

import './style.css';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    if (!authenticationService.currentUserValue) {
      window.location.href = '/'
    }
    else {
      this.state = {
        url: "",
        bestScore: 0,
        name: "",
      };
    }
  }

  componentDidMount() {
    if (authenticationService.currentUserValue) {
      fetch(`http://localhost:3001/api/me`, {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',

      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.name) {
            this.setState({
              name: data.name,
              url: data.avatarUrl,
              bestScore: data.bestScore,
            });
          }
          else {
            this.setState({
              name: "",
              url: "",
              bestScore: 0,
            })
            authenticationService.logout();
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <Container fluid style={{ marginTop: "5%" }}>
        <Row className="justify-content-center">
          <Col lg="9" xl="9">
            <Row className="justify-content-around my-5">
              <Col sm="6" md="6" lg="3" xl="3">
                <Image src={`http://localhost:3001/${this.state.url}`} roundedCircle style={{
                  height: '220px',
                  width: '220px'
                }} />
              </Col>
              <Col sm="9" md="9" lg="6" xl="6" className="align-items-center">
                <Row className='my-lg-4'>
                  <div className='info'>NickName: {this.state.name}</div>
                </Row>
                <Row className='my-lg-4'>
                  <div className='info'>Best Score: {this.state.bestScore}</div>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-around my-5" >
              <Col sm="9" md="9" lg="5" xl="5">
                <Button variant="secondary"
                  style={{ width: '100%', fontSize: '25px' }}
                  onClick={() => window.location.href = '/profile/update'}
                >
                  Update
                </Button>
              </Col>
              <Col sm="9" md="9" lg="5" xl="5">
                <Button variant="secondary"
                  style={{ width: '100%', fontSize: '25px' }}
                  onClick={() => window.location.href = '/questions'}
                >
                  Your Questions
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Profile;