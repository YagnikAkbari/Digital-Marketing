import Link from "next/link";
import React, { useEffect } from "react";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  // const scrollToContent = (sectionId: string) => {
  //   const specificContent = document.getElementById(sectionId);
  //   if (specificContent) {
  //     specificContent.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <div className="flex justify-between items-center">
        <img src="images/Logo.svg" alt="Logo..." />
        <ul className={`flex space-x-8 ${styles.navbar}`}>
          <li>
            <Link
              href="#services"
              // onClick={() => scrollToContent("services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#clients">Clients</Link>
          </li>
          <li>
            <Link href="#faqs">FAQs</Link>
          </li>
          <li>
            <Link href="#contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
