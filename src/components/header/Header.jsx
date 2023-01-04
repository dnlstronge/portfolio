import './header.css'
import CTA from './CTA'
import React from 'react'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi, I'm</h5>
        <h1>Dan Stronge</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

