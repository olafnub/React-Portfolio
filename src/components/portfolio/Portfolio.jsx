import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/flashcard.png'
import IMG2 from '../../assets/midtermelections.png'
import IMG3 from '../../assets/andysli.png'
import IMG4 from '../../assets/websiteresource.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'How to Study & Card Game',
    github: 'https://github.com/olafnub/quiz-learn-cards',
    demo: 'https://olafnub.github.io/quiz-learn-cards/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Midterm Elections Cheat Sheet',
    github: 'https://github.com/olafnub/midterm-cheatsheet',
    demo: 'https://olafnub.github.io/midterm-cheatsheet/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Andys Li',
    github: 'https://github.com/olafnub/Andy-s-Li',
    demo: 'https://olafnub.github.io/Andy-s-Li/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Website Resources',
    github: 'https://github.com/W1CD/UkraineResources',
    demo: 'https://w1cd.github.io/UkraineResources/'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

// <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="How to Study" />
//           </div>
//             <h3>How To Study & Card Game</h3>
//             <div className="portfolio__item-cta">
//               <a href="https://github.com/olafnub/quiz-learn-cards" className="btn" target="_blank">Github</a>
//               <a href="https://olafnub.github.io/quiz-learn-cards/" className="btn btn-primary" target="_blank">Live Demo</a>
//             </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG4} alt="Elections Cheat Sheet" />
//           </div>
//           <h3>Midterm Elections Cheat Sheet</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com/olafnub/midterm-cheatsheet" className="btn" target="_blank">Github</a>
//             <a href="https://olafnub.github.io/midterm-cheatsheet/" className="btn btn-primary" target="_blank">Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG2} alt="Personal Website"/>
//           </div>
//           <h3>Andy's Li</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com/olafnub/Andy-s-Li" className="btn" target="_blank">Github</a>
//             <a href="https://olafnub.github.io/Andy-s-Li/" className="btn btn-primary" target="_blank">Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG3} alt="Website Resources" />
//           </div>
//           <h3>Website Resources</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com/W1CD/UkraineResources" className="btn" target="_blank">Github</a>
//             <a href="https://w1cd.github.io/UkraineResources/" className="btn btn-primary" target="_blank">Live Demo</a>
//           </div>
//         </article>
