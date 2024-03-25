import React from "react";
import styles from "../styles/ContactUs.module.scss";
import SectionHeader from "@/common/SectionHeader";

export default function ContactPageOne() {
  return (
    <div id="contact-us" className={`mt-32 ${styles["contact-us"]}`}>
      <SectionHeader header={"Contact Us"} />
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <div className={`${styles["contect-us"]} w-[45%]`}>
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
              <button
                type="button"
                className=" rounded-md text-sm font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className={styles["contact-text-right"]}>
            <p>
              We'd love to help you out with any queries or service-related
              information at the earliest. Please drop in a line.
            </p>
            <div>
              <p style={{ fontWeight: "bold", color: "white" }}>
                Working Hours
              </p>
              <p>
                10 AM to 6 PM IST <br />
                Mon - Sat
              </p>
            </div>
            <div>
              <p style={{ color: "#B34400", fontSize: "20px" }}>
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
