import React, { FormEvent, useState } from "react";
import styles from "../styles/FooterService.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useToasts } from "react-toast-notifications";

const FooterService = () => {
  const [mail, setMail] = useState<string>("");
  const { addToast } = useToasts();
  const theme = useSelector((state: RootState) => state?.theme);
  const handleNewsletterSubscribe = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: mail }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        addToast(responseData.message);
        setMail("");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div
      className={`${styles.newsletter} flex items-center justify-center py-16 ${
        theme === "m-light" ? styles["l-newsletter"] : ""
      }`}
    >
      <label htmlFor="email">Subscribe to our newsletter</label>
      <form method="post" onSubmit={handleNewsletterSubscribe}>
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
