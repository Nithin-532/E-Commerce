import { Button } from "@mui/material";
import "./SecondHeader.css";

const SecondHeader = () => {
  return (
    <div className="second-header">
      <StyledComponent>
        <a>Home</a>
      </StyledComponent>
      <StyledComponent>
        <a>Laptops</a>
      </StyledComponent>
      <StyledComponent>
        <a>Desktops</a>
      </StyledComponent>
      <StyledComponent>
        <a>Accessories</a>
      </StyledComponent>
      <StyledComponent>
        <a>About Us</a>
      </StyledComponent>
      <StyledComponent>
        <a>FAQ's</a>
      </StyledComponent>
      <StyledComponent>
        <a>Blog</a>
      </StyledComponent>
      <StyledComponent>
        <a>Contact</a>
      </StyledComponent>
    </div>
  )
}

const StyledComponent = ({ children }) => {
  return (
    <div style={{ padding: '16px 20px', color: 'white', cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
      {children}
    </div>
  )
}

export default SecondHeader;