import React, { useEffect, useState } from "react";
import styles from "../styles/MainSection.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const MainSection = () => {
  const theme = useSelector((state: RootState) => state?.theme);
  const [showContent, setShowContent] = useState<boolean>(true);

  useEffect(() => {
    let timer;
    const toggleContent = () => {
      setShowContent(!showContent);
    };

    if (showContent) {
      timer = setTimeout(toggleContent, 5000);
    } else {
      timer = setTimeout(toggleContent, 1000);
    }

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [showContent]);

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
        <p className={styles["small"]}>
          Your Growth, Our Expertise
          {showContent && <span></span>}
        </p>
        <p className={styles.para}>
          We are a dedicated team of professionals committed to assisting brands
          in achieving exponential growth through strategic utilization of
          social media platforms. Elevate your YouTube presence effortlessly
          with our top-tier content creation services. As the trusted choice for
          influential creators and ambitious entrepreneurs seeking to expand
          their YouTube presence, we provide unparalleled strategy and
          production expertise.
        </p>
        <Link
          href="https://forms.gle/Nc3fkUkcTmbbE4ff8"
          className={`call-to-action`}
        >
          Get Your Session
        </Link>
      </div>
      <img src="images/Hero.svg" alt="Hero..." />
    </div>
  );
};

export default MainSection;
