import SectionHeader from "@/common/SectionHeader";
import React, { useState } from "react";

import styles from "../styles/Faqs.module.scss";

const accrMenu = [
  {
    question: " What is the turnaround time for videos?",
    answer:
      "We’re committed to providing the best results in the quickest time. This usually ranges between 2-4 days, depending on the length and type of videos.",
  },
  {
    question:
      "Is your editing process standardized or adapted to each client's content?",
    answer:
      "We know every creator is different. Which is why we’re open to complete customisation according to your voice and requirements. Our team will even give you suggestions to improve your content.",
  },
  {
    question: "What are the commercials?",
    answer:
      "Our pricing is flexible, depending on the duration and genre of the content. We offer monthly and per-project models.",
  },
  {
    question: "Where is Praper Media located, and what are the working hours?",
    answer:
      "Our office is located in India, and working hours are 10 AM - 6 PM IST (Mon - Sat).",
  },
  {
    question: "Do you create repurposed content for Reels / TikTok / Shorts?",
    answer:
      "Yes we do. In fact, we have a dedicated Vertical Short-Format Video team at Praper Media.",
  },
  {
    question: "Do you offer packages for Reels / TikTok / Shorts?",
    answer:
      "Yes! The world is hooked to short form video and we know you want to get in on it. We offer monthly packages and deals for the same.",
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

  return (
    <div id="faqs" className={`mt-32 ${styles.faqs}`}>
      <SectionHeader header="faqs" />
      <div className="flex justify-between mt-20 mx-auto">
        <div
          className={`grid grid-cols-2 mx-auto gap-y-4 gap-x-8 ${styles["accordion"]}`}
        >
          {accrMenu.map(
            (item: { question: string; answer: string }, idx: number) => (
              <div key={idx} className={styles["single-accordion"]}>
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
                  {item?.answer ?? ""}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
