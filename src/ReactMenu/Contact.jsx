import React, { useState } from 'react'
import { Form } from 'react-router-dom'

function Contact() {
  const [data, setData] = useState({
    fullname: '',
    phonenumer: '',
    email: '',
    message: '',
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((formdata) => {
      return {
        ...formdata,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // alert(`Name:-${data.fullname}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Full Name..." />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phonenumber" value={data.phonenumer} onChange={InputEvent} placeholder="Ex.123456789" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" name="message" value={data.message} onChange={InputEvent} placeholder="Message.....">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-3">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fliud">
        <div className="row">
          <iframe width="770" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
      </div>
    </>
  )
}

export default Contact
