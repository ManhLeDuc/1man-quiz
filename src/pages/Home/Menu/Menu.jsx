import React from 'react'
import MenuItem from './MenuItem.jsx';
import Col from 'react-bootstrap/Col';

import './style.css';

export default function Menu() {
  return (
    <Col sm="9" md="9" lg="9" xl="9">
      <div className='menu'>
        <MenuItem text="スタート" callback={()=>{window.location.href = '/play'}}></MenuItem>
        <MenuItem text="トップランク" callback={()=>{window.location.href = '/rank'}}></MenuItem>
        <MenuItem text="クイズ一覧" callback={()=>{window.location.href = '/questions'}}></MenuItem>
      </div>
    </Col>

  )
}
