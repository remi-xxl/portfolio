import React from 'react'
import CTA from '../CTA'
 import './header.css'
 import ME from '../../assets/smoke.jpg'
import HeaderSocial from '../HeaderSocial'


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
      <h1>Aderemi Israel</h1>
      <h5 className='text-light'>Frontend Developer</h5>
      <CTA/>
      <HeaderSocial/>
       <div className="me">
       <img src={ME} alt="" />
       </div>
       <a href="#contact" className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
