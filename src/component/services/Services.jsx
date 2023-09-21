import React from "react";
import "../services/services.css";
import { BsCheckLg } from "react-icons/bs";


function Services() {
  return (
    <section id="services">
      <h5>What I Offer </h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className="service">
          <div className="services__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB */}
        <article className="service">
          <div className="services__head">
            <h3>Networking</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/*END OF NETWORKING */}
        <article className="service">
          <div className="services__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheckLg className="services__list_icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/*END OF  */}
      </div>
    </section>
  );
}

export default Services;
