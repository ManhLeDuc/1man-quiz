import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import background from "../../assets/bg.jpg";
import QuestionInput from '../../components/QuestionInput/QuestionInput';
import AnswerInput from '../../components/AnswerInput/AnswerInput';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const styles = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

const UpdateQuestion = () => {
  return (
    <div style={styles}>
      <CustomNavbar></CustomNavbar>
      <Container fluid style={{ marginTop: "140px" }}>
        <Row className="justify-content-center">
          <Col lg="10">
            <Row className="justify-content-md-center">

              <Container fluid>
                <Row className="justify-content-center my-4">
                  <QuestionInput></QuestionInput>
                </Row>
                <Row className="justify-content-between my-lg-4 my-md-4">
                  <AnswerInput />
                  <AnswerInput />
                </Row>
                <Row className="justify-content-between my-lg-4 my-md-4">
                  <AnswerInput />
                  <AnswerInput />
                </Row>
              </Container>
            </Row>
            <Row className="justify-content-between my-lg-4 my-md-4" >
              <Col sm="3" md="3" lg="3" xl="3">
                <DropdownButton
                  variant={'secondary'}
                  title={'Answer'}
                  style={{ width: '100%', fontSize: '25px' }}
                >
                  <Dropdown.Item >A</Dropdown.Item>
                  <Dropdown.Item >B</Dropdown.Item>
                  <Dropdown.Item active>
                    C
                  </Dropdown.Item>
                  <Dropdown.Item >D</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col sm="3" md="3" lg="3" xl="3">
                <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }}>Submit</Button>
              </Col>

            </Row>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default UpdateQuestion;
