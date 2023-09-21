import React from "react";
import "./About.css";
import ME from "../../assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderFill } from "react-icons/bs";
function About() {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="about.jpg" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>2+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h4>Clients</h4>
              <small>10</small>
            </article>
            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h4>Projects</h4>
              <small>25</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            illo recusandae dolorum voluptate iusto nisi iure impedit velit quod
            rem hic alias, obcaecati voluptas harum cupiditate fugiat fuga,
            repudiandae doloremque!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
