import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
 import '../experience/experience.css'



function Experience() {
  return (
    <section className="experience_i" id="experience">

      <h3 className="skill">What Skills I Have</h3>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Experience </h3>       
          <div className="experience__content">
              <article className="experience__details">
                <AiFillCheckCircle className='experience__details_icons'le />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <AiFillCheckCircle className='experience__details_icons'le className='experience__details_icons'le />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <AiFillCheckCircle className='experience__details_icons'le />
                <div>
                  <h4>BOOTSTRAP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <AiFillCheckCircle className='experience__details_icons'le />
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <AiFillCheckCircle className='experience__details_icons'le />
                <div>
                  <h4>REACT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <AiFillCheckCircle className='experience__details_icons'le />
            <div>
              <h4>PHYTON</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
