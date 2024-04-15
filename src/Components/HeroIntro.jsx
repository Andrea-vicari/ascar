import React from 'react'

function HeroIntro() {
  return (
    <>
<section id="hero">
    <div className="hero-container" id='intro'>
      <h1 id='main-intro-anim' className='text-center'>Web developer</h1>
      <h2 id='main-title-anim' className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt quibusdam</h2>
      <a href="#timeline" className="btn-scroll btn scrollto bounce-top" title="Scroll Down">
        <i className="fa fa-chevron-down"></i>
      </a>
    </div>
  </section>
    </>
  )
}

export default HeroIntro