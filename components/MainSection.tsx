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
          We are a dedicated team of professionals committed to assisting brands
          in achieving exponential growth through strategic utilization of
          social media platforms. Elevate your YouTube presence effortlessly
          with our top-tier content creation services. As the trusted choice for
          influential creators and ambitious entrepreneurs seeking to expand
          their YouTube presence, we provide unparalleled strategy and
          production expertise.
        </p>
        <button className={`call-to-action`}>Get Your Session</button>
      </div>
      <img src="images/Hero.svg" alt="Hero..." />
    </div>
  );
};

export default MainSection;
