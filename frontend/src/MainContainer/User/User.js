import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/MainHeader/Header";
import ContactSection from "../../Components/PrevFooter/PrevFooter";
import SecondHeader from "../../Components/SecondHeader/SecondHeader";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";

export default function User() {
  return (
    <div>
      <Header />
      <SecondHeader />
      {/* <Contact /> */}
      <AboutUs />
      <ContactSection />
      <Footer />
    </div>
  )
}