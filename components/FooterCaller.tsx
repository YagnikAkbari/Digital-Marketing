import React from "react";
import styles from "../styles/FooterCaller.module.scss";

const FooterCaller = () => {
  return (
    <div
      className={`flex justify-between items-center py-10 ${styles["footer-caller"]}`}
    >
      <img src="images/Logo.svg" alt="Logo..." />
      <div className="flex items-center space-x-8">
        <p>Ready to get started?</p>
        <button className={`${styles["call-to-footer"]}`}>
          Get a Demo
          <i className={`fa-solid fa-arrow-up-long ${styles["up-arrow"]}`}></i>
        </button>
      </div>
    </div>
  );
};

export default FooterCaller;
