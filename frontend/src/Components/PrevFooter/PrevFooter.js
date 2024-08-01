// src/ContactSection.js
import React from 'react';
import { ICONS } from '../../assets';

const ContactSection = () => {
  return (
    <div className='bg-color-light-grey'>
      <div className="container pt-5 pb-5" style={{ display: {xs: 'none', lg: 'flex' }}}>
        <div className="row justify-content-between d-none d-lg-flex g-4">
          <div className="col-md-4 text-start ">
            <img src={ICONS.logoTransparent} alt="Buy&SellLaptops" className="img-fluid mb-3" style={{ width: '200px'}}/>
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
              #348, 2nd Floor, Between 10th & 11th Cross, Sampige Rd, Malleshwaram, Bengaluru, Karnataka 560003
              </p>
              <div>
                <a href="https://www.facebook.com/theoncesourceit?mibextid=LQQJ4d" className="me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com/theonesource_it_laptops?igshid=YmMyMTA2M2Y=">
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
              src="https://www.google.com/maps/dir//%23348,+2nd+Floor,+Between+10th+%26+11th+Cross,+Sampige+Rd,+Malleshwaram,+Bengaluru,+Karnataka+560003/@13.0015705,77.4890394,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae1715f4ff6d63:0x7206283a4f0ed0c!2m2!1d77.5714413!2d13.0015835?hl=en-in&entry=ttu"
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
