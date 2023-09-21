import React from 'react'
import '../portfolio/portfolio.css'
import IMG1 from "../../assets/port1.jpg";
import IMG2 from "../../assets/port2.jpg";
import IMG3 from "../../assets/port3.jpg";
import IMG4 from "../../assets/port4.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"> </div>
          <img src={IMG1} alt="port1" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> </div>
          <img src={IMG2} alt="port1" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> </div>
          <img src={IMG3} alt="port1" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio
