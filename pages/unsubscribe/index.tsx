import React, { FormEvent, useState } from "react";
import styles from "../../styles/FooterService.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useToasts } from "react-toast-notifications";
import api from "../api/api";

const Index = () => {
  const [mail, setMail] = useState<string>("");
  const { addToast } = useToasts();
  const theme = useSelector((state: RootState) => state?.theme);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNewsletterSubscribe = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      if (mail === "") {
        return addToast("Fill the email.", { appearance: "error" });
      }
      if (!validateEmail(mail)) {
        return addToast("Fill the Valid email.", { appearance: "error" });
      }

      const response = await api(process.env.NEXT_PUBLIC_BACKEND_URL).post(
        "/api/unsubscribe",
        { email: mail }
      );

      if (response.status === 200) {
        addToast(response?.data.message, { appearance: "success" });
        setMail("");
      }
    } catch (err: any) {
      if (err?.response?.status === 404) {
        addToast(err?.response?.data?.error, { appearance: "error" });
      } else {
        addToast("Please do it after some time.", { appearance: "error" });
      }
    }
  };
  return (
    <div
      className={`${styles.newsletter} flex items-center justify-center py-16 ${
        theme === "m-light" ? styles["l-newsletter"] : ""
      }`}
    >
      <label htmlFor="email">Unsubscribe from our newsletter</label>
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

export default Index;
