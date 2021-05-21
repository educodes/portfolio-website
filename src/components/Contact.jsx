import React from 'react'
import '../assets/styles/components/Contact.scss'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="text-contact">
          ¿Tienes alguna idea o proyecto en mente?
        </p>
        <p className="text-contact salto">Pongámonos en contacto.</p>
        <a className="btn" target="_blank" href="https://www.linkedin.com/in/eduardoperezs/">Hablemos</a>
      </div>
    </section>
  )
}

export default Contact