import React from 'react';
import Col from 'react-bootstrap/Col';

import './style.css'

const AnswerInput = ({value, onChange, isCorrect}) => {
  return (
    <Col sm="5" md="5" lg="5" xl="5">
      <input
        className={`answerInput ${isCorrect ? "correct" : "incorrect"}`}
        value={value} onChange={onChange}
      >
      </input>
    </Col>
  );
};

export default AnswerInput;
