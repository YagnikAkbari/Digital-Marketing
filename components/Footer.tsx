import React from "react";
import styles from "../styles/Footer.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Footer = () => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      className={`flex justify-between items-center py-8 ${styles["footer"]} ${
        theme === "m-light" ? styles["l-footer"] : ""
      }`}
    >
      <div className="flex justify-between items-center space-x-4">
        {/* <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <i
            className={`fab fa-facebook-f ${
              theme === "m-light" ? "fa-light-convert" : "fa-dark-convert"
            }`}
          ></i>
        </a> */}
        <a
          href="https://x.com/Growwitup?t=pWHcCHbXIp2hlyVcfyJZVg&s=09"
          target="_blank"
          className={styles["social-button"]}
        >
          <i
            className={`fab fa-twitter ${
              theme === "m-light" ? "fa-light-convert" : "fa-dark-convert"
            }`}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/company/growwitup/"
          target="_blank"
          className={styles["social-button"]}
        >
          <i
            className={`fab fa-linkedin-in ${
              theme === "m-light" ? "fa-light-convert" : "fa-dark-convert"
            }`}
          ></i>
        </a>
        <a
          href="https://www.instagram.com/growwitup?igsh=azA0NTVkaW11dzA4"
          target="_blank"
          className={styles["social-button"]}
        >
          <i
            className={`fab fa-instagram ${
              theme === "m-light" ? "fa-light-convert" : "fa-dark-convert"
            }`}
          ></i>
        </a>
      </div>
      <p className="flex items-center">
        <img
          src={
            theme === "m-light" ? "images/copy-light.svg" : "images/copy.svg"
          }
          alt="copy"
          className="inline"
        />
        <span className="ms-1">
          2024 Growwitup Studio I All Rights Reserved
        </span>
      </p>
    </div>
  );
};

export default Footer;
