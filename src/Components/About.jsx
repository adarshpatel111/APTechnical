import React from 'react';
import Common from './Common';
import aboutIMG from '../images/testing.jpg';


function About() {
  return (
    <>
      <Common
        question_heading="WHO ARE WE ?"
        highlight_part="The Developers"
        quote="We can assure you that ,we can fix your websites and softwares."
        imgsrc={aboutIMG}
        Pagevisit="/contact"
        btnText="Contact Now" />
    </>
  )
}

export default About
