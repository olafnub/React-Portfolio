import React from 'react'
import './about.css'
import ME from '../../assets/me2Copy.png'
import {FaAward} from 'react-icons/fa'
import {FaMapPin} from 'react-icons/fa'
import {FaMusic} from 'react-icons/fa'

const about = () => {
  return (
   <section id="about">
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
        <img src={ME} alt="picture of about me" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article class="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>6+ Months Coding</small>
          </article>

          <article className="about__card">
            <FaMapPin className="about__icon" />
            <h5>Where</h5>
            <small>Eden Praire, Minnesota</small>
          </article>
          
          <article className="about__card">
          <FaMusic className="about__icon" />
          <h5>Hobby</h5>
          <small>K-drama, music, one-piece</small>
          </article>
        </div>

        <p>"Computer science would be the future and a necessary skill." Reading the writing I found while cleaning up my room, I believe my young chicken scratch is unfolding. Now fast-forward to 2023, and I am continuously learning and working on projects more than ever. I’ve been able to help 200+ college students, primarily at the University of Minnesota, raise awareness for human rights and adopt financial literacy.</p>
      
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default about