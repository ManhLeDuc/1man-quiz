import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from "../../assets/bg.jpg";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase, auth, uiConfig } from '../../lib/firebase';

const styles = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

function Login() {
  return (
    <div style={styles}>
      <Container fluid style={{ marginTop: "5%" }}>
        <Row className="justify-content-center">
          <Col sm="9" md="9" lg="9" xl="9">
            <div className="column panel-block">
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;