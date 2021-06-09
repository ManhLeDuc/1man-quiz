import React from 'react'
import MenuItem from './MenuItem.jsx';
import Col from 'react-bootstrap/Col';

import './style.css';

export default function Menu() {
  return (
    <Col sm="9" md="9" lg="9" xl="9">
      <div className='menu'>
        <MenuItem text="Start"></MenuItem>
        <MenuItem text="Top Rank"></MenuItem>
        <MenuItem text="Questions"></MenuItem>
      </div>
    </Col>

  )
}