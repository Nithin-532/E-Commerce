import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/MainHeader/Header";
import ContactSection from "../../Components/PrevFooter/PrevFooter";
import SecondHeader from "../../Components/SecondHeader/SecondHeader";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div>
      <Header toggleSideBar={toggleSideBar}/>
      <SecondHeader isOpen={isOpen} />
      <Home />
      {/* <Contact /> */}
      {/* <AboutUs /> */}
      <ContactSection />
      <Footer />
    </div>
  )
}