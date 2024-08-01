import { useNavigate } from "react-router-dom";
import "./SecondHeader.css";

const SecondHeader = ({ isOpen, navigate }) => {
  return (
    <div className={`second-header ${isOpen ? 'open' : 'closed'} d-md-flex ps-md-5 align-items-center`}>
      <StyledComponent onClick={() => navigate("/")}>
        <a>Home</a>
      </StyledComponent>
      {/* <div className="btn-group">
        <button type="button" className="btn styled-component dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Laptops
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Lenovo</a></li>
          <li><a className="dropdown-item" href="#">Dell</a></li>
          <li><a className="dropdown-item" href="#">HP</a></li>
          <li><a className="dropdown-item" href="#">Surface</a></li>
          <li><a className="dropdown-item" href="#">Macbook</a></li>
          <li><a className="dropdown-item" href="#">Asus</a></li>
        </ul>
      </div>
      <div className="btn-group">
        <button type="button" className="btn styled-component dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Desktops
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Lenovo</a></li>
          <li><a className="dropdown-item" href="#">Dell</a></li>
          <li><a className="dropdown-item" href="#">HP</a></li>
        </ul>
      </div>
      <div className="btn-group">
        <button type="button" className="btn styled-component dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Accessories
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Keyboard / Mouse</a></li>
          <li><a className="dropdown-item" href="#">Routers</a></li>
          <li><a className="dropdown-item" href="#">Solid State Drive (SSD)</a></li>
          <li><a className="dropdown-item" href="#">Graphic Card</a></li>
        </ul>
      </div> */}
      <StyledComponent onClick={() => navigate("/main")}>
        <a>All Products</a>
      </StyledComponent>
      <StyledComponent onClick={() => navigate("/aboutUs")}>
        <a>About Us</a>
      </StyledComponent>
      {/* <StyledComponent>
        <a>Blog</a>
      </StyledComponent> */}
      <StyledComponent onClick={() => navigate("/contact")}>
        <a>Contact</a>
      </StyledComponent>
    </div>
  )
}

const StyledComponent = ({ onClick, children }) => {
  return (
    <div className="styled-component" onClick={onClick}>
      {children}
    </div>
  )
}

export default SecondHeader;