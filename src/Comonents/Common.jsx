import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Common(props) {
  
let i = 0;
let txt = props.quote;
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("forAutoType").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
useEffect(()=>{
  typeWriter();
},[])
  return (
    <>
      <section id='header' className='bg-main bg-color hero-section'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1>{props.question_heading} <br /><strong className='brand-name'>{props.highlight_part}</strong> </h1>
              <h2 id='forAutoType' className='my-3'>
                {/* {props.quote} */}
              </h2>
              <div className="mt-3 mb-3 text-center w-100 text-md-start">
                <NavLink to={props.Pagevisit} className='btn-get-started'>
                  {props.btnText}
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="text-center text-lg-end">
                <img src={props.imgsrc} style={{}} alt="Img" className='img-fluid animated' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
