import './header.css'
import CTA from './CTA'
import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi, I'm</h5>
        <h1>Dan Stronge</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />

        <div className='me'></div>
      </div>
    </header>
  )
}

