import React from "react";
import styles from "../styles/ContactUs.module.scss";
import SectionHeader from "@/common/SectionHeader";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ContactPageOne() {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      id="contact-us"
      className={`mt-32 ${styles["contact-us"]} ${
        theme === "m-light" ? styles["l-contact-us"] : ""
      }`}
    >
      <SectionHeader header={"Contact Us"} />
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <div
            className={`${styles["contect-us"]} ${
              theme === "m-light" ? styles["l-contect-us"] : ""
            } w-[45%]`}
          >
            <form className="space-y-4">
              <div className="grid items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700"
                  htmlFor="first_name"
                >
                  Name
                </label>
                <input
                  className="flex border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none rounded text-gray-300"
                  type="text"
                  id="first_name"
                />
              </div>
              <div className="grid items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none rounded text-gray-300"
                  type="text"
                  id="email"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none rounded text-gray-300"
                  id="message"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <button
                  type="button"
                  className=" rounded-md text-sm font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className={styles["contact-text-right"]}>
            <p>
              We'd love to help you out with any queries or service-related
              information at the earliest. Please drop in a line.
            </p>
            <div>
              <p>Working Hours</p>
              <p>
                10 AM to 6 PM IST <br />
                Mon - Sat
              </p>
            </div>
            <div>
              <p
                style={{
                  color:
                    theme === "m-light"
                      ? "rgba(236, 37, 70, 0.769)"
                      : "#B34400",
                  fontSize: "20px",
                }}
              >
                growwitup@growwitup.in
              </p>
              <p>Trusted by many creators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
