import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div
      className={`flex justify-between items-center py-8 ${styles["footer"]}`}
    >
      <div className="flex justify-between items-center space-x-4">
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img src="images/Facebook.svg" alt="facebook" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img src="images/twitter.png" alt="twitter" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img src="images/Linkedin.svg" alt="linked" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img src="images/instagram.svg" alt="instagram" />
        </a>
      </div>
      <p className="flex items-center">
        <img src="images/copy.svg" alt="copy" className="inline" />
        <span className="ms-1">
          2024 Growwitup Studio I All Rights Reserved
        </span>
      </p>
    </div>
  );
};

export default Footer;
