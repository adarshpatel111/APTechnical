import React from 'react';
import Common from '../Common';
import homeImg from '../images/heroSection.jpg';
import Service from './Service';
import Contact from './Contact';

function Home() {
  return (
    <>
      <Common 
      question_heading="GROW YOUR"
      highlight_part="Business"
      quote="We are the team of best Developers who make Websites." 
      imgsrc={homeImg} 
      Pagevisit="/service" 
      btnText="Get Started"
      />
      <Service/>
      <Contact/>
    </>
  )
}

export default Home;
