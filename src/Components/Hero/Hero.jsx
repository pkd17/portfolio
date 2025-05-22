import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pkdprofile2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Pratyush Kumar Das,</span> a developer based in india.</h1>
      <p>Seeking a challenging position in the field of Computer Science to leverage my expertise in programming, software development, and problem-solving. Aiming to contribute to innovative projects at the intersection of artificial intelligence, machine learning, and practical applications in fields such as technology-driven solutions, data analysis, and user-centric software development.</p>
      <div className="hero-action">
        <dev className="hero-connect"><AnchorLink
className='anchor-link' offset={50} href='#contact'   >Connect With Me</AnchorLink>
        </dev>
        <div className="hero-resume">My Resume</div>

      </div>

      
    </div>
  )
}

export default Hero
