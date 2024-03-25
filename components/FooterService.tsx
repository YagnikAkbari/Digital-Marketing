import React, { useState } from "react";
import styles from "../styles/FooterService.module.scss";

const FooterService = () => {
  const [mail, setMail] = useState<string>("");
  return (
    <div
      className={`${styles.newsletter} flex items-center justify-center py-16`}
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
