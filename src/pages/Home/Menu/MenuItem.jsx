import React from 'react';
import Row from 'react-bootstrap/Row';

import './style.css';

export default function MenuItem({ text, callback }) {
  return (
    <Row className="justify-content-center my-5">
      <div className='menu-item' onClick={callback}>
        {text}
      </div>
    </Row>

  )
}
