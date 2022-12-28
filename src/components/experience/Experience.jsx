import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {ImCss3} from'react-icons/im'
import {IoLogoJavascript} from 'react-icons/io'
import {DiMongodb} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className = "experience__details">
              <ImHtmlFive className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCss3 className="experience__details-icon"/>
             <div>
              <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>  
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiMongodb className="experience__details-icon"/>
             <div>
                <h4>MangoDB</h4>
                <small className="text-light">Beginner</small>
             </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon"/>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}

export default Experience