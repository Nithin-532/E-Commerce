// src/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <div className='bg-color-light-grey'>
      <div className="container pt-5 pb-5" style={{ display: {xs: 'none', lg: 'flex' }}}>
        <div className="row justify-content-between d-none d-lg-flex g-4">
          <div className="col-md-4 text-start ">
            <img src="path-to-your-logo.png" alt="Panna Computers Logo" className="img-fluid mb-3" />
            <h2>Buy&SellLaptops</h2>
            <p className="text-muted">BEGINNING OF NEW DIGITAL WORLD</p>
            <div>
              <h5>Got Questions? Call us 24/7</h5>
              <p>
                <i className="bi bi-telephone-fill"></i> +91 70307 03101 <br />
                <i className="bi bi-telephone-fill"></i> +91 96049 00311
              </p>
            </div>
          <div className="col text-start">
              <h5>Contact Info</h5>
              <p>
                16 No Bus Stop, Pawar Nagar Colony No 1, Near Manapuram Gold Building, <br />
                Thergaon, Pune - 411033
              </p>
              <div>
                <a href="https://www.facebook.com" className="me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column">
            <h5>Quick Navigation</h5>
            <ul className="list-unstyled">
              <li>Lenovo</li>
              <li>Dell</li>
              <li>HP</li>
              <li>About</li>
              <li>Home</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h5>How To Reach Us</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9638589396844!2d73.77087981436766!3d18.5987521873549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc27cfd7271%3A0x57e3a7df7a8e5e8c!2sPanna%20Computers%20%26%20Refurbished%20Laptops!5e0!3m2!1sen!2sin!4v1625913690641!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Panna Computers Location"
            ></iframe>
          </div>
        </div>
        <div className='d-flex d-lg-none align-items-center align-self-center justify-content-center justify-self-center'>
          <a href="https://www.facebook.com" className="me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
