import SectionHeader from "@/common/SectionHeader";
import React from "react";
import styles from "../styles/Clients.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Clients = () => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      id="clients"
      className={`mt-32 ${styles.clients} ${
        theme === "m-light" ? styles["l-clients"] : ""
      }`}
    >
      <SectionHeader header="clients" prefix="our" />
      <div className="grid grid-cols-4 justify-between mt-20 mx-auto gap-4">
        <div className={styles["brand-wrapper"]}>
          <img
            src="images/Co-Buy.svg"
            alt="brand 4..."
            className={styles["brand-img"]}
          />
        </div>
        <div className={styles["brand-wrapper"]}>
          <img
            src="images/outperform.png"
            alt="brand 3..."
            className={styles["brand-img"]}
          />
        </div>
        <div className={styles["brand-wrapper"]}>
          <img
            src="images/OFk.jpg"
            alt="brand 1..."
            className={styles["brand-img"]}
          />
        </div>
        <div className={styles["brand-wrapper"]}>
          <img
            src="images/vicky.jpg"
            alt="brand 2..."
            className={styles["brand-img"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
