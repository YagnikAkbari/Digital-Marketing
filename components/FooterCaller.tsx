import React, { useState, FormEvent } from "react";
import styles from "../styles/FooterCaller.module.scss";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

import api from "@/pages/api/api";

const FooterCaller = () => {
  const theme = useSelector((state: RootState) => state?.theme);
  const [mail, setMail] = useState<string>("");
  const { addToast } = useToasts();
  const [showDate, setShowDate] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const formatDate = (isoDateString: any): any => {
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-GB", options);
  };

  const handleMeetingDate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (mail === "") {
        return addToast("Fill the email.", { appearance: "error" });
      }
      if (!validateEmail(mail)) {
        return addToast("Fill the Valid email.", { appearance: "error" });
      }

      const response = await api(process.env.NEXT_PUBLIC_BACKEND_URL).post(
        "/api/send-date",
        { email: mail, date: formatDate(startDate) }
      );

      if (response.status === 200) {
        addToast(response?.data.message, { appearance: "success" });
        setMail("");
        setStartDate(new Date());
        setShowDate(false);
      }
    } catch (err: any) {
      addToast("Please do it after some time.", { appearance: "error" });
    }
  };
  return (
    <div
      className={`flex justify-between items-center py-10 ${
        styles["footer-caller"]
      } ${theme === "m-light" ? styles["l-footer-caller"] : ""}`}
    >
      <img
        src={theme === "m-light" ? "images/Logo-dark.svg" : "images/Logo.svg"}
        alt="Logo..."
      />
      <div className="flex items-center space-x-8">
        <p>Ready to get started?</p>
        <div className={styles.dates}>
          <button
            className={`${styles["call-to-footer"]} ${
              theme === "m-light" ? styles["l-call-to-footer"] : ""
            }`}
            onClick={() => {
              setShowDate((prevState) => !prevState);
            }}
          >
            Get a Demo
            <i
              className={`fa-solid fa-arrow-up-long ${styles["up-arrow"]}`}
            ></i>
          </button>
          {showDate && (
            <>
              <div
                className={styles.overlay}
                onClick={() => {
                  setShowDate(false);
                }}
              ></div>
              <div
                className={`${styles["datepicker"]} ${
                  theme === "m-light" ? styles["l-datepicker"] : ""
                }`}
              >
                <form method="post" onSubmit={handleMeetingDate}>
                  <span>Select Meeting Date</span>
                  <input
                    type="text"
                    placeholder="Email address"
                    name="email"
                    value={mail ?? ""}
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => {
                      setStartDate(date);
                    }}
                  />
                  <button type="submit">Set Meeting</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterCaller;
