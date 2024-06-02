import React from 'react';
import './Header.css';
import { ICONS } from '../../assets';

const Header = () => {
  return (
    <>
      {/* Larger screens */}
      <div className="d-none d-lg-flex justify-content-between align-items-center header">
        <div className="navbar-brand d-flex align-items-center logo ps-2 pe-2">
          <img
            src="path-to-logo.png"
            height="30"
            className="d-inline-block align-top"
            alt="Panna Computer's"
          />
        </div>
        <div className='flex-grow-1 mx-4 d-flex justify-content-center'>
          <div className='input-group'>
            <input type="text" className="form-control" placeholder="All Categories" />
            <div className="input-group-append">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="nav-link d-flex align-items-center ps-4">
            <img
              src={ICONS.shopping_cart}
              height="30"
              className="d-inline-block align-top"
              alt="Shopping-cart-bag"
            />
            <span className='count-item'>0</span>
            <span>₹0.00</span>
          </a>
        </div>
      </div>

      {/* Smaller screens */}
      <div className='d-flex flex-column d-lg-none p-3 gap-2'>
        <div className="d-flex justify-content-between align-items-center">
          <div className="navbar-brand d-flex align-items-center logo ps-2 pe-2">
            <img
              src="path-to-logo.png"
              height="30"
              className="d-inline-block align-top"
              alt="Panna Computer's"
            />
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="nav-link d-flex align-items-center">
              <i className="fas fa-user"></i>
            </a>
            <a href="#" className="nav-link d-flex align-items-center ps-2 color-black">
              <img
                src={ICONS.shopping_cart}
                height="30"
                className="d-inline-block align-top"
                alt="Shopping-cart-bag"
              />
              <span className='count-item'>0</span>
              <span>₹0.00</span>
            </a>
          </div>
        </div>
        <div className='flex-grow-1 mx-4 d-flex justify-content-center'>
          <div className='input-group'>
            <input type="text" className="form-control" placeholder="Search Products ..." />
            <div className="input-group-append">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
