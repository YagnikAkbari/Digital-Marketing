import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { RootState } from "@/store/store";

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state?.theme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    theme === "m-dark" ? true : false
  );

  return (
    <div
      className={`${theme === "m-dark" ? "dark-mode" : "light-mode"} contain`}
    >
      <DarkModeSwitch
        // style={{ position: "fixed", top: "10px", right: "50px" }}
        checked={!isDarkMode}
        onChange={() => {
          dispatch(toggleTheme(!isDarkMode ? "m-dark" : "m-light"));
          setIsDarkMode((prevState) => !prevState);
        }}
        size={35}
        moonColor="rgba(236,236,236,1)"
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
