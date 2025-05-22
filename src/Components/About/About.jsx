import React from 'react'
import './About.css'
import theme_pattern from '../../assets/teardrop_gradient.png'
import profile_img from '../../assets/aboutimg.png'

const About = () => {
  return (
    <div id='about' classsName='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
          
          <div className="about-para">

            <p>
              Hi! I'm a passionate web developer with a knack for creating dynamic and responsive web applications. I love turning ideas into reality and am always eager to learn new technologies and improve my skills.I have experience in HTML, CSS, JavaScript, and React, and I'm currently exploring backend technologies to become a full-stack developer. My goal is to build user-friendly applications that provide seamless experiences.</p>
          </div>
          
          <div className="about-skills">

          <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '50%'}}/> </div>
          <div className="about-skill"><p>Java</p><hr style={{width: '50%'}}/></div>
          <div className="about-skill"><p>MySQL</p><hr style={{width: '50%'}}/></div>
          <div className="about-skill"><p>NodeJS</p><hr style={{width: '50%'}}/></div>
          <div className="about-skill"><p>ReactJS</p><hr style={{width: '50%'}}/></div>
          <div className="about-skill"><p>Java Script</p><hr style={{width: '50%'}}/></div>
          <div className="about-skill"><p>MS Office</p><hr style={{width: '50%'}}/></div>
          </div>
          </div>
      </div>

    <div className="about-achievements">
      <div className="about-achievement">
        <h1>Web Dev</h1>
        <p>Geeks for Geeks</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>10+</h1>
        <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
        <h1>5+</h1>
        <p>Happy Clients</p>
        </div>

    </div>
  </div>
  )
}

export default About
