import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionItem from './QuestionItem/QuestionItem';
import Pagination from './CustomPagination/Pagination';
import Button from 'react-bootstrap/Button';

import { authenticationService } from '../../services/authentication.service';
import { authHeader } from '../../helpers';

import './style.css';



class QuestionList extends React.Component {

  constructor(props) {
    super(props);

    if (!authenticationService.currentUserValue) {
      window.location.href = '/'
    }
    else {
      this.state = {
        pageNumber: 1,
        pageSize: 6,
        questionList: [],
        totalPages: 1,
      };
    }
  }

  getQuestions(pageNumber, pageSize) {
    if (authenticationService.currentUserValue) {
      fetch(`https://guarded-oasis-70016.herokuapp.com/api/questions`, {
        method: 'PUT',
        headers: authHeader(),
        credentials: 'include',
        body: JSON.stringify({ pageNumber: pageNumber, pageSize: pageSize })
      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.success) {
            this.setState({
              questionList: data.data.docs,
              totalPages: data.data.totalPages,
            });
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

  componentDidMount() {
    this.getQuestions(1, 6);
  }

  render() {
    return (
      <Container fluid style={{ marginTop: "5%" }}>
        <Row className="justify-content-center">
          <Col sm="3" md="3" lg="3" xl="3">
            <Button
              variant="secondary"
              style={{ width: '100%', fontSize: '25px' }}
              onClick={() => { window.location.href = '/questions/create' }}
            >
              Create Question
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="9" xl="9">
            {this.state.questionList.map(item => {
              return (<QuestionItem key={item._id} question={item.question} createAt={item.createAt} isActive={item.isActive} questionId={item._id}>

              </QuestionItem>)
            })}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Pagination totalPages={this.state.totalPages} callback={(pN, pS)=>{this.getQuestions(pN, pS)}} pageSize={this.state.pageSize}></Pagination>
        </Row>
      </Container>
    )
  }
}

export default QuestionList;
