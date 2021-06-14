import React from 'react'
import Col from 'react-bootstrap/Col';

import './style.css'

export default function QuestionInput({value, onChange}) {
  return (
    <Col>
      <input
        className="question" value={value} onChange={onChange}   
      >
      </input>
    </Col>

  )
}
