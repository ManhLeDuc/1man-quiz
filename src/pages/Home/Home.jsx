import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from "./Menu/Menu";
import NotLoggedInMenu from "./Menu/NotLoggedInMenu";

import { authenticationService } from '../../services/authentication.service';

export default function Home() {
  return (
    <Container fluid style={{ marginTop: "5%" }}>
      <Row className="justify-content-center">
        {authenticationService.currentUserValue ? (<Menu></Menu>) : (<NotLoggedInMenu></NotLoggedInMenu>)}
      </Row>
      <Row className="justify-content-end">
        <Col sm="3" md="3" lg="3" xl="3">
          <Button variant="secondary" onClick={() => { window.location.href = "/rule" }}>Rule</Button>
        </Col>
      </Row>
    </Container>
  )
}
