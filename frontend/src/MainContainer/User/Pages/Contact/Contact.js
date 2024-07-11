import React from 'react'

export default function Contact() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 d-flex flex-column">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 className='align-self-center'>Contact Us</h1>
        </div>
      </div>
      <div className="row container pt-5 d-flex flex-row">
        <div className="col-md-6 d-flex flex-column">
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.511953467657!2d144.95373531531682!3d-37.81627997975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f8c2af56c2d1!2sPanna%20Computers!5e0!3m2!1sen!2sin!4v1622020495778!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="row mt-5">
            <div className="col-12">
              <h2>Our Address</h2>
              <p>123 Main Street, Anytown, Anywhere. Phone: +91 9742097199</p>
            </div>
            <div className='col-12'>
              <p className='m-0'>Please Call us: +91 9742097199</p>
              <p>Email: <span><a href='mailto:ansar543@gmail.com' style={{ color: '#333e48', textDecoration: 'none' }}>info@buyandselllaptop.com</a></span></p>
            </div>
            <div className='col-12'>
              <h3>Opening Hours</h3> 
              <p className='m-0'>Monday to Friday: 9am-9pm</p>
              <p>Saturday to Sunday: 9am-11pm</p>
            </div>
            <div className='col-12'>
              <h3>Careers</h3> 
              <p className='m-0'>If you’re interested in employment opportunities at Buy and Sell Laptops ,</p>
              <p>please email us: <span><a href='mailto:ansar543@gmail.com' style={{ color: '#333e48', textDecoration: 'none' }}>info@buyandselllaptop.com</a></span></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Leave us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No.</label>
              <input type="text" className="form-control" id="phone" placeholder="Phone No." />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Comment or Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Comment or Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
      
    </div>
  );
}
