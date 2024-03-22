import { useState } from "react";
import { useDispatch } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { toggleTheme } from "@/store/action";

import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import FooterCaller from "@/components/FooterCaller";
import FooterService from "@/components/FooterService";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div>
      <DarkModeSwitch
        style={{}}
        checked={!isDarkMode}
        onChange={() => {
          dispatch(toggleTheme(!isDarkMode ? "m-dark" : "m-light"));
          setIsDarkMode((prevState) => !prevState);
        }}
        size={40}
      />
      <Navbar />
      <MainSection />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Faqs />
      <ContactUs />
      <FooterCaller />
      <FooterService />
      <Footer />
    </div>
  );
}
