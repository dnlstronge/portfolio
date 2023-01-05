import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineBook } from 'react-icons/ai'
import { TbHammer } from 'react-icons/tb'
import { AiOutlinePhone } from 'react-icons/ai'
import React from 'react'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#portfolio"><TbHammer/></a>
      <a href="#contact"><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav