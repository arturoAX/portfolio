import React from 'react';
import './mini.css';

const Mini = ({ title, subtitle, image, description, includes, extras, price, reverse }) => {
  return (
    <section id='Mini'>
      <h5>{subtitle}</h5>
      <h2>{title}</h2>

      <div className={`container mini__container ${reverse ? 'reverse' : ''}`}>
        <div className="mini__me">
          <div className="mini__me-image">
            <img src={image} alt={title} />
          </div>
        </div>

        <div className="mini__content">
          <div className="mini-content-box">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
              <p>INCLUDES:</p>
              {includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>NEED A LITTLE MORE?</h4>
            <p>{extras}</p>
            <h5>STARTING AT {price}</h5>
          </div>
          

          <a href='#contact' className='btn btn-primary'>Inquire Now</a>
        </div>
      </div>
    </section>
  );
};

export default Mini;
