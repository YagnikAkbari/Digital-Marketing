import Link from "next/link";
import React from "react";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div
      className={`flex justify-between items-center pt-12 pb-14 ${styles.navbar}`}
    >
      <img src="images/Logo.svg" alt="Logo..." />
      <ul className={`flex space-x-8`}>
        <li>
          <Link href="#services">Services</Link>
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
  );
};

export default Navbar;
