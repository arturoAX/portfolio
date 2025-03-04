import React, { useState } from 'react';
import './testimonials.css';
import Bri from '../images/BriWithWings.png';
import Wise from '../images/SailorMoon.jpg';
import Dang_fuku from '../images/DangAndGhost.png';
import Skullys_art from '../images/SkullyHuaCheng.png';
import Neptune_lindsey from '../images/LindseyWithGoth.png';
import Winterciphers from '../images/WindMaster.png';
import Lunasilerius from '../images/Amy_3786.jpg';
import Ocean_streets from '../images/CarGenshin.png';
import Cosplay_tenk0 from '../images/Kimiko_3750.jpg';





const testimonials = [
  {
    avatar: Bri,
    name: 'Briannabuns',
    insta: "https://www.instagram.com/briannabuns/",
    review: 'Arturo is truly a exceptional photographer whose work consistently exceeds expectations. His ability to capture light is nothing short of magical. Whether its the golden glow of a sunrise or the dramatic interplay of shadows in low light, Arturo knows how to manipulate every ray to elevate his subjects.'
  },
  {
    avatar: Wise,
    name: 'Wiseinmadness',
    review: 'Arturo’s work on my Jinx cosplay from Arcane was phenomenal, especially how he brought Fishbones to life. Through perfect angles, lighting, and dynamic SFX—like glowing blue energy and a rocket-firing illusion—he made it look straight out of the show.'
  },
  {
    avatar: Dang_fuku,
    name: 'Dang_fuku',
    review: 'Arturo is not only talented but also incredibly easy to work with. He’s patient, open to ideas, and makes every shoot feel fun and relaxed. His collaborative approach ensures your vision comes to life effortlessly, making the entire experience enjoyable from start to finish.'
  },
  {
    avatar: Skullys_art,
    name: 'Skullys_art',
    review: 'Arturo is so much fun to work with! His excitement is contagious—every time he finds the perfect angle, he rushes over to show it off, and we all get to freak out about it together. His passion and energy make every shoot an unforgettable experience!'
  },
  {
    avatar: Neptune_lindsey,
    name: 'Neptune.lindsey',
    review: 'Arturo is a true creative! He has a great eye for setting and mood, and was able to perfectly capture the spooky atmosphere I wanted for this Locked Tomb photoshoot. I love working with because he is open to unique ideas while bringing his own suggestions thanks to his photography and editing expertise.'
  },
  {
    avatar: Winterciphers,
    name: 'Winterciphers',
    review: 'I’m beyond excited to share my Wind Master cosplay, which is so dear to me, and these photos turned out absolutely amazing! Huge thanks to @arturo.photo8 for letting me join this shoot and for capturing such incredible shots. I’m still actively sobbing over them—they perfectly bring the character to life in a way I never imagined!'
  },
  {
    avatar: Lunasilerius,
    name: 'Lunasilerius',
    review: 'Huge thanks to @arturo.photo8 for these breathtaking photos of my Violet Evergarden cosplay! I can’t stop admiring how amazing these shots turned out! Highly recommend Arturo for anyone looking to bring their cosplay to life through photography.'
  },
  {
    avatar: Ocean_streets,
    name: 'Ocean.streets',
    review: 'Working with @arturo.photo8 on my Mechanic Kaveh cosplay was such an awesome experience! Arturo has a knack for capturing every detail, whether it’s the intricate design of the cosplay or the vibe of the character. These photos bring Kaveh to life in such a unique and stunning way, perfectly blending the mechanical elements with the character’s charm.'
  },
  {
    avatar: Cosplay_tenk0,
    name: 'Cosplay_tenk0',
    review: 'Working with @arturo.photo8 on my Mechanic Kaveh cosplay was such an awesome experience! Arturo has a knack for capturing every detail, whether it’s the intricate design of the cosplay or the vibe of the character. These photos bring Kaveh to life in such a unique and stunning way, perfectly blending the mechanical elements with the character’s charm.'
  }

];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="testimonial-container">
        <div className="testimonial">
          <div className="client__avatar">
            <img src={testimonials[index].avatar} alt={testimonials[index].name} />
          </div>
          <h5 className="client__name">{testimonials[index].name}</h5>
          <small className="client__review">{testimonials[index].review}</small>
        </div>

        {/* Navigation Buttons */}
        <button 
          className="prev-btn" 
          onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
        >
          ❮
        </button>
        <button 
          className="next-btn" 
          onClick={() => setIndex((index + 1) % testimonials.length)}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
