import SectionHeader from "@/common/SectionHeader";
import React from "react";
import styles from "../styles/Clients.module.scss";

const Clients = () => {
  return (
    <div id="clients" className={`mt-32 ${styles.clients}`}>
      <SectionHeader header="clients" prefix="our" />
      <div className="grid grid-cols-4 justify-between mt-20 mx-auto gap-4">
        <img
          src="images/Co-Buy.svg"
          alt="brand 4..."
          className={styles["brand-img"]}
        />
        <img
          src="images/outperform.png"
          alt="brand 3..."
          className={styles["brand-img"]}
        />
        <img
          src="images/OFk.jpg"
          alt="brand 1..."
          className={styles["brand-img"]}
        />
        <img
          src="images/vicky.jpg"
          alt="brand 2..."
          className={styles["brand-img"]}
        />
      </div>
    </div>
  );
};

export default Clients;
