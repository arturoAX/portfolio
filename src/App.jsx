import React from 'react';
import Header from './components/header/header'; // Capitalized since components should start with uppercase
import Nav from './components/nav/nav';
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Mini from './components/mini/mini'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import MiniImage from './components/images/mini.png';
import DeluxeImage from './components/images/HeXuan_3785.jpg';
import ExperienceImage from './components/images/Carscar.png';
import LUXURIOUSImage from './components/images/kda.jpg';



export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Experience />

      {/* Mini Package */}
      <Mini 
      title="MINI PACKAGE"
      subtitle="The"
      image={MiniImage}
      description="This package is perfect for those who want something short and sweet..."
      includes={[
        "1 Full Consultation Prior to Photoshoot",
        "30-45 Minutes of shooting time",
        "4 Fully edited fine art digital images"
      ]}
      extras="You can customize this package further by adding props, booking a cool location, or adding a hair look!"
      price="$35"
    />

      <Mini 
        title="DELUXE PACKAGE"
        subtitle="The"
        image={DeluxeImage}
        description="This is a great package for both individuals and duos.  The session will be a little bit longer and you'll experience a whimsical storytelling experience."
        includes={[
          "1 Full Consultation Prior to Photoshoot",
          "1 hour of shooting time",
          "10 Fully edited fine art digital images"
        ]}
        extras="Additional retouching, creative direction, and access to exclusive locations available."
        price="$55"
        reverse={true}  // This will flip the layout!
      />

      <Mini 
        title="EXPERIENCE PACKAGE"
        subtitle="The"
        image={ExperienceImage}
        description="Want the full immersive experience?  Then this is the adventure you'll want to start with.  On this path, we will capture photos as if you were in a movie."
        includes={[
          "1 Full Consultation Prior to Photoshoot",
          "Up to 2 Hours of shooting time",
          "15-18 Fully edited fine art digital images"
        ]}
        extras="I want to make all photoshoots an unforgettable experience, whether it's hiking through the woods or having a luxurious moment in studio.  I can make your ideas come to life with the right planning!"
        price="$85"
        customClass="experience-package"

      />
         <Mini 
        title="LUXURIOUS PACKAGE"
        subtitle="The"
        image={LUXURIOUSImage}
        description="Escape reality with this breathtaking package from out of this world. A fun one to do with friends! Romantic and whimsical? Or adventurous and fantastical?  Let's create the world you have been envisioning."
        includes={[
          "1 Full Consultation Prior to Photoshoot",
          "Up to 3 hours of shooting time",
          "25 Fully edited fine art digital images"
        ]}
        extras="Additional retouching, creative direction, and access to exclusive locations available."
        price="$130"
        reverse={true}  // This will flip the layout!
      />


      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
