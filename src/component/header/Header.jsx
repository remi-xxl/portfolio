import React from 'react'
import CTA from '../CTA'
 import './header.css'
import HeaderSocial from '../HeaderSocial'


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
      <h1>aderemi israel</h1>
      <h5 className='text-light'>fullstack developer</h5>
      <CTA/>
      <HeaderSocial/>
       <div className="me">
       
       </div>
       <a href="#contact" className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
