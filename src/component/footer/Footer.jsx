import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import {BsSnapchat} from 'react-icons/bs'
import '../footer/footer.css'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        REMI_XXL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">expereince</a>
        </li>
        <li>
          <a href="#contact">services</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://twitter.com" target="_blank">
          <BsTwitter />
        </a>
        <a href="http://instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="http://snapchat.com" target="_blank">
          <BsSnapchat />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; REMI_XXL.    All rights resevered. </small>
      </div>
    </footer>
  );
}

export default Footer
