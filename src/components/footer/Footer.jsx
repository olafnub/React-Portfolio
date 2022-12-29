import React from 'react'
import './footer.css'
const Footer = () => {
  return (
   <footer>
    <a href="#" className="footer__logo">React Portfolio Helped Made BY <a href="https://youtu.be/G-Cr00UYokU">EGATOR</a></a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="portfolio">Portfolio</a></li>
      <li><a href="#miniblog">Miniblog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__copyright">
      <small>Followed youtube tutorial by <a href="https://youtu.be/G-Cr00UYokU">EGATOR</a></small>
    </div>


    </footer>
  )
}

export default Footer