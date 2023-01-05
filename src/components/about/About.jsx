import './about.css'
import ME from '../../assets/me-about.jpg'
import React from 'react'

const About = () => {
  return (
    <section id="about">
      <h5> get to know...</h5>
      <h2> about me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <h5>Experience</h5>
              <small> 6 months</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About