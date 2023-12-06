import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Adil</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer_link">
              Message
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/mohammad-adil-017919229"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="https://github.com/devilzs1"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-github" />
          </a>
          <a href="" className="footer_social-link" target="_blank">
            <i className="bx bxl-instagram" />
          </a>
        </div>

        <span className="footer_copy">
          &#169; codeForMe. All right reserved. Made in India{" "}
        </span>
      </div>
    </footer>
  );
}

export default Footer