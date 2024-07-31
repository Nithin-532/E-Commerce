import { createContext, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/MainHeader/Header";
import ContactSection from "../../Components/PrevFooter/PrevFooter";
import SecondHeader from "../../Components/SecondHeader/SecondHeader";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { useNavigate } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";

export const UserContext = createContext();

export default function User({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const toggleSideBar = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <UserContext.Provider value={{
      text
    }}>
      <div>
        <Header toggleSideBar={toggleSideBar} setText={setText}/>
        <SecondHeader isOpen={isOpen} navigate={navigate} />
        {/* <Home /> */}
        {/* <Contact /> */}
        {/* <AboutUs /> */}
        {children}
        {/* <MainPage /> */}
        <ContactSection />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}