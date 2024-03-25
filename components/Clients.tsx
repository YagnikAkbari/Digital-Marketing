import SectionHeader from "@/common/SectionHeader";
import React from "react";
import styles from "../styles/Clients.module.scss";

const Clients = () => {
  return (
    <div id="clients" className={`mt-32 ${styles.clients}`}>
      <SectionHeader header="clients" prefix="our" />
      <div className="grid grid-cols-5 justify-between mt-20 mx-auto gap-4">
        <img
          src="images/brand1.svg"
          alt="brand 1..."
          className={styles["brand-img"]}
        />
        <img
          src="images/brand2.svg"
          alt="brand 2..."
          className={styles["brand-img"]}
        />
        <img
          src="images/brand3.svg"
          alt="brand 3..."
          className={styles["brand-img"]}
        />
        <img
          src="images/brand4.svg"
          alt="brand 4..."
          className={styles["brand-img"]}
        />
        <img
          src="images/brand5.svg"
          alt="brand 5..."
          className={styles["brand-img"]}
        />
      </div>
    </div>
  );
};

export default Clients;
