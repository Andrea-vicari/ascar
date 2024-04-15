import React from 'react'
import { useSelector } from 'react-redux'

function Skills() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-body-tertiary" : bgType = "bg-black"

  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  return (
    <>
      <section id="skills" className={"skills" + " " + bgType + " " + textType}>
        <div id='skills_container' className="container">
          <h1 className="section-title pt-5">skills</h1>
          <p className='mb-5 text-center'>As a front-end developer, I possess a strong foundation in HTML, CSS, and JavaScript,</p>
          <div className="row pt-3 pb-5">
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="fab fa-react"></i></div>
              <h4 className="title">React</h4>
              <p className="description">Coded with React, smooth user experience and device compatibility</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="fab fa-php"></i></div>
              <h4 className="title">Php</h4>
              <p className="description">PHP syntax and basics: Familiar with the basic syntax of PHP</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="fab fa-css3"></i></div>
              <h4 className="title">Bootstrap5</h4>
              <p className="description">Coded using Bootstrap5 framework, to speed up future developments</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="fab fa-node"></i></div>
              <h4 className="title">Node</h4>
              <p className="description">Clean and elegant design suitable for many projects and business</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="fab fa-android"></i></div>
              <h4 className="title">Responsive</h4>
              <p className="description">Responsive layout, perfectly showcase your projects in all devices</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="fab fa-js"></i></div>
              <h4 className="title">JSON</h4>
              <p className="description">JSON or API friendly. Customize portfolio via JSON or APIs </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Skills