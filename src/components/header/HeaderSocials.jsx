import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href="www.linkedin.com" target="_blank"><BsLinkedin/></a>
    <a href="www.github.com" target="_blank"><FaGithub/></a>
    <a href="www.twitter.com" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials