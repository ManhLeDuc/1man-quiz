import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionInput from './QuestionInput/QuestionInput';
import AnswerInput from './AnswerInput/AnswerInput';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { authenticationService } from '../../services/authentication.service';
import { authHeader } from '../../helpers';


class UpdateQuestion extends React.Component {

  constructor(props) {
    super(props);

    if (!authenticationService.currentUserValue) {
      window.location.href = '/'
    }
    else {
      this.state = {
        question: "",
        answers: ["", "", "", ""],
        correctIndex: 0,
        questionId: this.props.match.params.questionId,
      };
    }
  }

  handleAnswerChange = (text, index) => {
    let tempAnswers = [...this.state.answers];
    tempAnswers[index] = text;
    this.setState({
      answers: tempAnswers,
    })
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

  handleSubmit() {
    if (!this.state.question) {
      window.alert("Empty Question");
      return;
    }

    for (let a of this.state.answers) {
      if (!a) {
        window.alert("Empty answer");
        return;
      }
    }

    let answersSet = new Set(this.state.answers);
    if (answersSet.size !== this.state.answers.length) {
      window.alert("Duplicated Answer");
      return;
    }

    if (authenticationService.currentUserValue) {

      let question = this.state.question;
      let correct_answer = this.state.answers[this.state.correctIndex];
      let incorrect_answers = this.state.answers.filter((answer, index) => index !== this.state.correctIndex);

      fetch(`https://guarded-oasis-70016.herokuapp.com/api/questions/${this.state.questionId}`, {
        method: 'PUT',
        headers: authHeader(),
        credentials: 'include',
        body: JSON.stringify({ question: question, correct_answer: correct_answer, incorrect_answers: incorrect_answers })
      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.success) {
            window.alert("Question updated!!!");
            window.location.href = "/questions"
          }
          else {
            window.alert("Something went wrong, please refresh page!!!");
            // authenticationService.logout();
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  getAnswerText = () => {
    return this.state.answers[this.state.correctIndex];
  }

  render() {
    return (
      <Container fluid style={{ marginTop: "140px" }}>
        <Row className="justify-content-center">
          <Col lg="10">
            <Row className="justify-content-md-center">

              <Container fluid>
                <Row className="justify-content-center my-4">
                  <QuestionInput value={this.state.question} onChange={(e) => { this.setState({ question: e.target.value }) }}></QuestionInput>
                </Row>
                <Row className="justify-content-between my-lg-4 my-md-4">
                  <AnswerInput onChange={(e) => {
                    this.handleAnswerChange(e.target.value, 0);
                  }}
                    value={this.state.answers[0]}
                    isCorrect={this.state.correctIndex === 0} />
                  <AnswerInput onChange={(e) => {
                    this.handleAnswerChange(e.target.value, 1);
                  }}
                    value={this.state.answers[1]}
                    isCorrect={this.state.correctIndex === 1} />
                </Row>
                <Row className="justify-content-between my-lg-4 my-md-4">
                  <AnswerInput onChange={(e) => {
                    this.handleAnswerChange(e.target.value, 2);
                  }}
                    value={this.state.answers[2]}
                    isCorrect={this.state.correctIndex === 2} />
                  <AnswerInput onChange={(e) => {
                    this.handleAnswerChange(e.target.value, 3);
                  }}
                    value={this.state.answers[3]}
                    isCorrect={this.state.correctIndex === 3} />
                </Row>
              </Container>
            </Row>
            <Row className="justify-content-between my-lg-4 my-md-4" >
              <Col sm="3" md="3" lg="3" xl="3">
                <DropdownButton
                  variant={'secondary'}
                  title={this.getAnswerText()}
                  style={{ width: '100%', fontSize: '25px' }}
                >
                  <Dropdown.Item active={this.state.correctIndex === 0}
                    onClick={() => {
                      this.setState({ correctIndex: 0 });
                    }}
                  >
                    {this.state.answers[0]}
                  </Dropdown.Item>
                  <Dropdown.Item active={this.state.correctIndex === 1}
                    onClick={() => {
                      this.setState({ correctIndex: 1 });
                    }}
                  >
                    {this.state.answers[1]}
                  </Dropdown.Item>
                  <Dropdown.Item active={this.state.correctIndex === 2}
                    onClick={() => {
                      this.setState({ correctIndex: 2 });
                    }}>
                    {this.state.answers[2]}
                  </Dropdown.Item>
                  <Dropdown.Item active={this.state.correctIndex === 3}
                    onClick={() => {
                      this.setState({ correctIndex: 3 });
                    }}>
                    {this.state.answers[3]}
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col sm="3" md="3" lg="3" xl="3">
                <Button variant="secondary" style={{ width: '100%', fontSize: '25px' }} onClick={()=>{this.handleSubmit()}}>Update</Button>
              </Col>

            </Row>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default UpdateQuestion;