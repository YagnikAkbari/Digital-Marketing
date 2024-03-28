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
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img
            src={
              theme === "m-light"
                ? "images/FacebookF-dark.svg"
                : "images/Facebook.svg"
            }
            alt="facebook"
          />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img
            src={
              theme === "m-light"
                ? "images/Twitter-dark.svg"
                : "images/twitter.png"
            }
            alt="twitter"
          />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img
            src={
              theme === "m-light"
                ? "images/Linkedin-dark.svg"
                : "images/Linkedin.svg"
            }
            alt="linked"
          />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className={styles["social-button"]}
        >
          <img
            src={
              theme === "m-light"
                ? "images/instagram-dark.svg"
                : "images/instagram.svg"
            }
            alt="instagram"
          />
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
