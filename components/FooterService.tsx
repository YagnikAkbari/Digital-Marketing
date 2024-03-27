import React, { useState } from "react";
import styles from "../styles/FooterService.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const FooterService = () => {
  const [mail, setMail] = useState<string>("");
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      className={`${styles.newsletter} flex items-center justify-center py-16 ${
        theme === "m-light" ? styles["l-newsletter"] : ""
      }`}
    >
      <label htmlFor="email">Subscribe to our newsletter</label>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(mail);
        }}
      >
        <input
          type="text"
          placeholder="Email address"
          name="email"
          onChange={(e) => setMail(e.target.value)}
        />
        <button>
          <i className="fa-solid fa-arrow-turn-down"></i>
        </button>
      </form>
    </div>
  );
};

export default FooterService;
