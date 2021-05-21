import React from 'react'
// import Projects from './Projects'
import portfolio from '../assets/static/img/portfolio.png'
import filoImg from '../assets/static/img/filovideo.png'
import batatabit from '../assets/static/img/batatabit.png'
import portfoliofcc from '../assets/static/img/fcc.png'
import '../assets/styles/components/Main.scss'



const Main = () => {
  return (
    <main className="main-section">
      <section className="main__about-me container" id="about">
        <div className="about__content-text">
          <h2 id="about" className="title">Sobre Mí</h2>
          <p className="text-p">
            Hola, soy Eduardo Pérez, un placer que estés aquí. Soy de Colombia <span className="heart">❤</span>. Estudie programación de software y  actualmente me dedico al desarrollo web Front-end.
          </p>
          <p className="text-p">Las principales tecnologías con las que trabajo son HTML5, CSS3, JavaScript, SASS. En estos momentos estoy reforzando y desarrollando con React Js y Node Js.</p>
          <a className="btn" href="">Descargar Cv</a>
        </div>
      </section>

      <section className="main__projects container" id="projects">
        <h2 className="title">Proyectos</h2>
        <p className="text-p">
          Últimos proyectos realizados, con tecnologías: HTML5, CSS3, SASS, JavaScript (es6+), React Js, React Redux y Router.
        </p>

        <div className="projects-conatiner">


          <article className="project" >
            <figure className="project__img-container">
              <img
                className="project__img"
                src={portfolio}
                alt="img-portfolio"
              />
            </figure>
            <div className="project-content">
              <h3 className="title-2">Web Portfolio</h3>
              <p className="text-p">
                Portafolio web Front-end
              </p>
              <div className="box-btn">
                <a className="btn" href="">En Vivo</a>
                <a className="link" href="https://github.com/educodes/portfolio-website" target="_blank">Fuente</a>
              </div>
            </div>
          </article>

          <article className="project">
            <figure className="project__img-container">
              <img
                className="project__img"
                src={filoImg}
                alt="img-filovideo"
              />
            </figure>
            <div className="project-content">
              <h3 className="title-2">FiloVideo</h3>
              <p className="text-p">
                Front-end de la plataforma FiloVideo basado en el proyecto Platzivideo de la Escuela de JavaScript.
              </p>
              <div className="box-btn">
                <a className="btn" href="https://filovideo.netlify.app/" target="_blank">En Vivo</a>
                <a className="link" href="https://github.com/educodes/FiloVideo" target="_blank">Fuente</a>
              </div>
            </div>
          </article>


          <article className="project">
            <figure className="project__img-container">
              <img
                className="project__img"
                src={portfoliofcc}
                alt="img-portfoliofcc"
              />
            </figure>
            <div className="project-content">
              <h3 className="title-2">Responsive Web Design</h3>
              <p className="text-p">
                Proyectos para Responsive Web Design Certification dada por FreeCodeCamp.
              </p>
              <div className="box-btn">
                <a className="btn" href="https://educodes.github.io/freecodecamp/responsive-web-design-projects/portfolio/" target="_blank">En Vivo</a>
                <a className="link" href="https://github.com/educodes/freecodecamp" target="_blank">Fuente</a>
              </div>
            </div>
          </article>


          <article className="project">
            <figure className="project__img-container">
              <img
                className="project__img"
                src={batatabit}
                alt="img-batatabit"
              />
            </figure>
            <div className="project-content">
              <h3 className="title-2">Batatabit</h3>
              <p className="text-p">
                Landing page del proyecto Batatabit con enfoque mobile first del curso de Responsive Design: Maquetación Mobile First.
              </p>
              <div className="box-btn">
                <a className="btn" href="https://educodes.github.io/Batatabit/" target="_blank">En Vivo</a>
                <a className="link" href="https://github.com/educodes/Batatabit" target="_blank">Fuente</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

  )
}

export default Main