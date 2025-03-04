import React from 'react'
import './experience.css'
import { LuBadgeCheck } from "react-icons/lu";


const experience = () => {
  return (
    <section id='experience'>
      <h5>EXPLORE</h5>
      <h2>PACKAGES</h2>

      

      
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Booking Info</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <LuBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Cosplay or Portrait-Lifestyle Shoots</h4>
                <small className='text-light'>Cosplay or Portrait-Lifestyle portraiture can be an extremely customizable session, so I have created several starting packages to allow for different budgets</small>
              </div>
            </article>
            <article className='experience__details'>
              <LuBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Customized Shoots</h4>
                <small className='text-light'>For more customized shoots, please expect a price point anywhere between $75-$200. </small>
              </div>
            </article>
           
            <article className='experience__details'>
              <LuBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Travel Fees May Apply</h4>
                <small className='text-light'>Depending on the location of the shoot. As a hired photographer, I strive to accommodate your needs, but if the shoot requires significant travel, additional fees will be added to cover transportation and accommodation costs.</small>
              </div>
            </article>
            <article className='experience__details'>
              <LuBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Time Frame</h4>
                <small className='text-light'>To execute the shoot, a time frame of 3 weeks to 2 months or more may be necessary</small>
              </div>
            </article>

          </div>
        </div>
      {/* Booking Info */}

      <div className='experience__backend'>
      <h3>PACKAGES</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <LuBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Mini Package</h4>
                <small className='text-light'>Mini shoot/short portrait sessions</small>
              </div>
            </article>
            <article className='experience__details'>
              <LuBadgeCheck className='experience__details-icon' />
              <div>
                <h4>DELUXE PACKAGE</h4>
                <small className='text-light'>Deluxe shoot/extended shoot sessions</small>
              </div>
            </article>
            <article className='experience__details'>
              <LuBadgeCheck className='experience__details-icon' />
              <div>
                <h4>EXPERIENCE PACKAGE</h4>
                <small className='text-light'>Experience shoot/immersive portrait sessions etc</small>
              </div>
            </article>
          </div>
        </div>
      </div>


      </section>
  )
}

export default experience