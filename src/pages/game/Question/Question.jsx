import React from 'react'
import Col from 'react-bootstrap/Col';

import './style.css'

export default function Question({text}) {
  return (
    <Col>
      <div
        className="question"
      >
        {text}
      </div>
    </Col>

  )
}
