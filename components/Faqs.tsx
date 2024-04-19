import SectionHeader from "@/common/SectionHeader";
import React, { useState } from "react";

import styles from "../styles/Faqs.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const accrMenu = [
  {
    question:
      "What is the turnaround time for the video and what's packages are you offering?",
    answer:
      "We’re committed to providing the best results in the quickest time. This usually ranges between 2-4 days, depending on the length and type of videos. The world is hooked to short form video and we know you want to get in on it. We offer monthly packages and deals for the same.",
  },

  {
    question: "What are the commercials?",
    answer:
      "Our pricing is flexible, depending on the duration and genre of the content. We offer monthly and per-project models.",
  },

  {
    question: "Do you create repurposed content for Reels / TikTok / Shorts?",
    answer:
      "Yes we do. In fact, we have a dedicated Vertical Short-Format Video team at Growwitup Media.",
  },
  {
    question: "Do you offer packages for Reels / TikTok / Shorts?",
    answer:
      "Yes! The world is hooked to short form video and we know you want to get in on it. We offer monthly packages and deals for the same.",
  },
  {
    question: "How does the onboarding process work?",
    answer:
      "Once you’re happy with the trial video, we mutually co-sign an agreement. You’ll get the trial video with the watermark removed, and we’ll have payment after each video for the first month.",
  },
  {
    question: "How will I communicate with the Praper team?",
    answer:
      "We’ll be connected on a Slack channel, and you’ll be assigned a senior editor who will handle your projects. Our CEO will supervise all work, and you can connect with him if required.",
  },
  {
    question: "What modes of payment do you accept?",
    answer:
      "We’re flexible, and accept a number of payment methods.\nInternational Payments: PayPal (5% extra for processing), Wise.com, Bill.com.\nIndian Payments: NEFT, UPI, or Net Banking.",
  },
  {
    question: "How will we be exchanging files?",
    answer:
      "We’ll share a dropbox folder with you through which you can send and receive files without any loss in quality.",
  },
];

const Faqs = () => {
  const [activeTabs, setActiveTabs] = useState<number[]>([]);

  const toggleAccordion = (idx: number) => {
    setActiveTabs((prevActiveTabs) => {
      if (prevActiveTabs.includes(idx)) {
        return prevActiveTabs.filter((itemIdx) => itemIdx !== idx);
      } else {
        return [...prevActiveTabs, idx];
      }
    });
  };

  const theme = useSelector((state: RootState) => state?.theme);

  return (
    <div
      id="faqs"
      className={`mt-32 ${styles.faqs} ${
        theme === "m-light" ? styles["l-faqs"] : ""
      }`}
    >
      <SectionHeader header="faqs" />
      <div className="flex justify-between mt-20 mx-auto">
        <div
          className={`grid grid-cols-2 mx-auto gap-y-4 gap-x-8 ${styles["accordion"]}`}
        >
          {accrMenu.map(
            (
              item: { question: string; answer: string; extra?: string },
              idx: number
            ) => (
              <div key={idx}>
                <div className={styles["single-accordion"]}>
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className={styles["faq-closed"]}
                  >
                    {item?.question}
                    <span>
                      <i
                        className={`fas fa-sort-${
                          activeTabs.includes(idx) ? "up" : "down"
                        }`}
                      ></i>
                    </span>
                  </button>
                  <p
                    className={`${
                      activeTabs.includes(idx)
                        ? styles["display"]
                        : styles["hide"]
                    }`}
                  >
                    {idx === 0 && (
                      <div className="inline">
                        <p>{item?.answer}</p>
                        <Link
                          href="https://forms.gle/Nc3fkUkcTmbbE4ff8"
                          className="link inline mt-5"
                          target="_blank"
                        >
                          Get in touch
                        </Link>
                      </div>
                    )}
                    {idx !== 0 && item?.answer}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
