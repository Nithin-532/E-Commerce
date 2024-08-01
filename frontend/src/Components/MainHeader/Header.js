import React from "react";
import "./Header.css";
import { ICONS } from "../../assets";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSideBar, setText }) => {
  const navigate = useNavigate();

  const navigateAllProducts = (e) => {
    if (e.key === "Enter") {
      navigate("/main");
    }
  };

  return (
    <>
      {/* Larger screens */}
      <div
        className="d-none d-lg-flex justify-content-between align-items-center py-2 px-2"
        style={{ maxWidth: "100vw" }}
      >
        <div className="navbar-brand d-flex align-items-center logo">
          <img
            src={ICONS.logo}
            style={{ height: "90px", objectFit: "cover" }}
            className="d-inline-block align-top"
            alt="Buy&SellLaptops"
          />
        </div>
        <div className="flex-grow-1 mx-4 d-flex justify-content-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="All Categories"
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => navigateAllProducts(e)}
            />
            <div className="input-group-append">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="nav-link d-flex align-items-center ps-4 mr-4">
            <img
              src={ICONS.shopping_cart}
              height="30"
              className="d-inline-block align-top"
              alt="Shopping-cart-bag"
            />
            <span className="count-item">0</span>
            <span>₹0.00</span>
          </a>
        </div>
      </div>

      {/* Smaller screens */}
      <div
        className="d-flex flex-column d-lg-none"
        style={{ width: "100%" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            {/* <button className="btn btn-secondary" onClick={toggleSideBar}>
              ☰
            </button> */}
            <div className="navbar-brand d-flex align-items-center">
              <img
                src={ICONS.logo}
                style={{ height: "90px", objectFit: "cover" }}
                className="d-inline-block align-top"
                alt="Buy&SellLaptops"
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            {/* <a href="#" className="nav-link d-flex align-items-center">
              <i className="fas fa-user"></i>
            </a> */}
            <a
              href="#"
              className="nav-link d-flex align-items-center color-black"
            >
              <img
                src={ICONS.shopping_cart}
                height="30"
                className="d-inline-block align-top"
                alt="Shopping-cart-bag"
              />
              <span className="count-item">0</span>
              <span>₹0.00</span>
            </a>
          </div>
        </div>
        <div className='flex-grow-1 mx-4 d-flex justify-content-center mx-2 my-2'>
          <div className='input-group'>
            <input type="text" className="form-control" placeholder="Search Products ..." onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => navigateAllProducts(e)} />
            <div className="input-group-append" onClick={() => navigate("/main")} style={{ cursor: 'pointer'}}>
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
