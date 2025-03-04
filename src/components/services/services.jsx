import React from 'react'
import './services.css'
import { GoCheck } from "react-icons/go";

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Photography</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GoCheck className='service__list-icon' />
              <p>Cosplay</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Portrait & Lifestyle Photography</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Wedding Photography</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Engagement Sessions</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Birthday & Anniversary Shoots</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        {/* Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Videography</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GoCheck className='service__list-icon' />
              <p>Music Videos</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Product & Promotional Videos</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Engagement & Love Story Videos</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Convention & Event Coverage</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Special Effects & Motion Graphics</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        {/* Content Creation */}
        <article className='service'>
          <div className='service__head'>
            <h3>SFX</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GoCheck className='service__list-icon' />
              <p>Magic & Elemental Effects</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Aura & Power-Up Effects</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Smoke & Fog Effects</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Glowing & Neon Effects</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Green Screen & Compositing</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
      </section>
  )
}

export default services