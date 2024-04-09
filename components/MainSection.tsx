import React from "react";
import styles from "../styles/MainSection.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const MainSection = () => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      className={`flex items-center justify-between ${styles.hero} ${
        theme === "m-light" ? styles["l-hero"] : ""
      }`}
    >
      <div className={styles["hero-content"]}>
        <h1>
          Empower the world with <span>social</span>.
        </h1>
        <p className={styles["small"]}>Do Different, Be Different</p>
        {/* <h1>
          Helping the <span>world's</span> creators create.
        </h1> */}
        <p>
          Elevate Your Brand's Online Presence with Our Exceptional Digital
          Marketing Solutions. Let Us Be Your Strategic Ally on the Path to
          Digital Success.
        </p>
        <button className={`call-to-action`}>Get Your Session</button>
      </div>
      <img src="images/Hero.svg" alt="Hero..." />
    </div>
  );
};

export default MainSection;
