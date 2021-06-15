import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { authenticationService } from '../../services/authentication.service';
import { authHeader } from '../../helpers';

import './style.css';

class QuestionDetail extends React.Component {

  constructor(props) {
    super(props);

    if (!authenticationService.currentUserValue) {
      window.location.href = '/'
    }

    else {
      this.state = {
        isAdmin: authenticationService.currentUserValue.isAdmin,
        questionId: this.props.match.params.questionId,
        answers: ["", "", "", "",],
        correctIndex: 0,
        question: "",
        isActive: false,
      };
    }
  }

  componentDidMount() {
    if (authenticationService.currentUserValue) {
      fetch(`https://guarded-oasis-70016.herokuapp.com/api/questions/${this.state.questionId}`, {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',

      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.success) {
            let answers = [];
            answers.push(data.data.correct_answer);
            for (let a of data.data.incorrect_answers) {
              answers.push(a);
            }
            this.setState({
              question: data.data.question,
              answers: answers,
              isActive: data.data.isActive,
            });
          }
          else {
            window.alert("Question not found");
            window.location.href = "/questions"
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleDelete = () => {
    if (authenticationService.currentUserValue) {
      fetch(`https://guarded-oasis-70016.herokuapp.com/api/questions/${this.state.questionId}`, {
        method: 'DELETE',
        headers: authHeader(),
        credentials: 'include',

      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.success) {
            window.alert("Question deleted!!!");
            window.location.href = "/questions";
          }
          else {
            window.alert("Something went wrong !!!");
            window.location.href = "/questions";
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleActivate = () => {
    if (this.state.isAdmin) {
      fetch(`https://guarded-oasis-70016.herokuapp.com/api/questions/${this.state.questionId}/active`, {
        method: 'PUT',
        headers: authHeader(),
        credentials: 'include',
        body: JSON.stringify({ isActive: !this.state.isActive })
      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.success) {
            if (this.state.isActive) {
              window.alert("Deactivated");
              this.setState({ isActive: false });
            }
            else {
              window.alert("Activated");
              this.setState({ isActive: true });
            }
          }
          else {
            window.alert("Something went wrong !!!");
            window.location.href = "/questions";
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleUpdate = () => {
    if (this.checkEditable()) {
      window.location.href = `/questions/update/${this.state.questionId}`;
    }
  }

  checkEditable = () => {
    if (this.state.isAdmin) {
      return true;
    }
    else if (this.state.isActive) {
      return false;
    }
    else return true;
  }

  render() {
    return (
      <Container fluid style={{ marginTop: "100px" }}>
        <Row className="justify-content-center">
          <Col lg="10">
            <Row className="justify-content-between my-lg-4 my-md-4">
              <Col sm="4" md="4" lg="4" xl="4">
                <Alert variant='dark' style={{ textAlign: "center" }}>
                  {this.state.isActive ? 'Activated' : 'Not activated'}
                </Alert>
              </Col>
              <Col sm="4" md="4" lg="4" xl="4">
                <Row>
                  <Col sm="6" md="6" lg="6" xl="6">
                    <Button variant="secondary"
                      style={{ width: '100%', fontSize: '25px', visibility: this.checkEditable() ? 'visible' : 'hidden', }}
                      onClick={() => { this.handleUpdate() }}
                    >
                      Update
                    </Button>
                  </Col>
                  <Col sm="6" md="6" lg="6" xl="6">
                    <Button variant="secondary"
                      style={{ width: '100%', fontSize: '25px', visibility: this.checkEditable() ? 'visible' : 'hidden', }}
                      onClick={() => { this.handleDelete() }}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-md-center">

              <Container fluid>
                <Row className="justify-content-center my-4">
                  <Col>
                    <div
                      className="question"
                    >
                      {this.state.question}
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-between my-lg-4 my-md-4">
                  <Col sm="5" md="5" lg="5" xl="5">
                    <div
                      className={`answerDetail ${this.state.correctIndex === 0 ? "correct" : "incorrect"}`}
                    >
                      {this.state.answers[0]}
                    </div>
                  </Col>
                  <Col sm="5" md="5" lg="5" xl="5">
                    <div
                      className={`answerDetail ${this.state.correctIndex === 1 ? "correct" : "incorrect"}`}
                    >
                      {this.state.answers[1]}
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-between my-lg-4 my-md-4">
                  <Col sm="5" md="5" lg="5" xl="5">
                    <div
                      className={`answerDetail ${this.state.correctIndex === 2 ? "correct" : "incorrect"}`}
                    >
                      {this.state.answers[2]}
                    </div>
                  </Col>
                  <Col sm="5" md="5" lg="5" xl="5">
                    <div
                      className={`answerDetail ${this.state.correctIndex === 3 ? "correct" : "incorrect"}`}
                    >
                      {this.state.answers[3]}
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row className="justify-content-end my-lg-4 my-md-4" >
              <Col sm="3" md="3" lg="3" xl="3">
                <Button variant="secondary"
                  style={{ width: '100%', fontSize: '25px', visibility: this.state.isAdmin ? 'visible' : 'hidden', }}
                  onClick={() => { this.handleActivate() }}
                >
                  {this.state.isActive ? 'Deactivate' : 'Activate'}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default QuestionDetail;
