import React from 'react'
import './about.css'
import ME from '../images/Arturo.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";




const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <MdOutlineFolderCopy className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Southern California based photographer specializing in capturing 
          stories with dreamy Fine Art Portraiture, Cosplay, Weddings, Events, and more.
          </p>
          <p>I am an artist, a dreamer, and a self-titled wizard behind the lens! I’ve spent years mastering the art of cosplay photography, design, film, and special effects to bring characters to life in extraordinary ways. Beyond 
            capturing stunning moments, I love playing Genshin with my friends or trying new things with my closest crew. When I’m not editing photos or crafting creative shoots, you might find me skateboarding through the city or scouting scenic locations to create the perfect shot.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
      </section>
  )
}

export default about