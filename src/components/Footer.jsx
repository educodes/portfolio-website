import React from 'react'
import '../assets/styles/components/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes">
        <a target="_blank" href="https://www.linkedin.com/in/eduardoperezs/"><i className="fab fa-linkedin"></i></a>
        <a target="_blank" href="https://github.com/educodes"><i className="fab fa-github-square"></i></a>
        <a target="_blank" href="https://www.instagram.com/edu.codes/"><i className="fab fa-instagram"></i></a>
        {/* <a href=""><i className="fab fa-blogger"></i></a> */}
      </div>

      <p className="footer-copyright">
        Eduardo Pérez &copy; 2021 - <a target="_blank" className="link-profile" href="https://github.com/educodes">@educodes</a> ✨
      </p>
    </footer>
  )
}

export default Footer