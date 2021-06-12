import React from 'react';
import Col from 'react-bootstrap/Col';
import { authHeader } from '../../../helpers';

import './style.css'

const Answer = ({ text, callback, active, setActive }) => {

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const [className, setClassName] = React.useState("answer");

  const sendAnswer = async () => {
    try {
      if (active) {
        setActive(false);
        setClassName("answer active");
        const result = await fetch(`http://localhost:3001/api/answer`, {
          method: 'PUT',
          headers: authHeader(),
          credentials: 'include',
          body: JSON.stringify({
            answer: text
          }),
        }).then((res) => { return res.json(); })
        let tempClassName = "";
        if (result.success) {
          if(result.data.correct){
            tempClassName = "answer correct";
          }
          else{
            tempClassName = "answer wrong";
          }
          delay(1000, ()=>{
            setClassName(tempClassName);
            delay(3000, ()=>{
              setClassName("answer");
              if(result.data.gameOverScore){
                callback(result.data.gameOverScore);
              }
              else{
                callback(-1);
              }
            });
          })
          
        }
        else {
          window.alert("Error answering Question");
        }
      }
    }
    catch (error) {
      window.alert(error.message);
    }

  }

  return (
    <Col sm="5" md="5" lg="5" xl="5">
      <div
        className={className}
        onClick={sendAnswer}
      >
        {text}
      </div>
    </Col>
  );
};

export default Answer;
