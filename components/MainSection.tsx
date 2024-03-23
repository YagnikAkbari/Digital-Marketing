import React from "react";
import styles from "../styles/MainSection.module.scss";

const MainSection = () => {
  return (
    <div className={`flex items-center justify-between ${styles.hero}`}>
      <div className={styles["hero-content"]}>
        <h1>
          Ignite Your YouTube Success Journey with Our World-Class Content Team
        </h1>
        <p>
          Empower Your Brand's Growth with GROWWITUP's Dynamic Digital
          Solutions. Let Us be Your Strategic Ally on the Path to Digital
          Success, Unleashing the Power of Social Media and Elevating Your
          Online Presence.
        </p>
        <button className={`call-to-action`}>Get Your Session</button>
      </div>
      <img src="images/Hero.svg" alt="Hero..." />
    </div>
  );
};

export default MainSection;
