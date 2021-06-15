import React from 'react'
import MenuItem from './MenuItem.jsx';
import Col from 'react-bootstrap/Col';

import './style.css';

export default function Menu() {
  return (
    <Col sm="9" md="9" lg="9" xl="9">
      <div className='menu'>
        <MenuItem text="サインイン" callback={()=>{window.location.href = '/login'}}></MenuItem>
        <MenuItem text="サインアップ" callback={()=>{window.location.href = '/signup'}}></MenuItem>
      </div>
    </Col>

  )
}
