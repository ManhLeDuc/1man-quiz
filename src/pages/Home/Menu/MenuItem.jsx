import React from 'react';
import Row from 'react-bootstrap/Row';

import './style.css';

export default function MenuItem({ text }) {
  return (
    <Row className="justify-content-center my-5">
      <div className='menu-item'>
        {text}
      </div>
    </Row>

  )
}
