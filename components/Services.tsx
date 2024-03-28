import SectionHeader from "@/common/SectionHeader";
import ServiceCard from "@/common/ServiceCard";
import styles from "../styles/Services.module.scss";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Services = () => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      id="services"
      className={`mt-14 ${styles.services} ${
        theme === "m-light" ? styles["l-services"] : ""
      }`}
    >
      <SectionHeader header="services" prefix="our" />
      <div className="flex justify-between mt-20">
        <ServiceCard
          title="MARKETING RESEARCH"
          description="We have marketers with up to 10
years of experience. We know
that marketing is about results,
so we provide comprehensive
reports."
          image={theme === "m-light" ? "images/3.svg" : "images/search.svg"}
        />
        <ServiceCard
          title="STRATEGY"
          description="To survive the competition, you
          need a targeted plan that will
          help you increase your target
          customers. generate sales and
          get a positive balance of costs
          and profits."
          image={
            theme === "m-light" ? "images/dark-chat.svg" : "images/sward.svg"
          }
        />
        <ServiceCard
          title="ADVERTISING"
          description="We develop and create bright and effective communication materials. We fully support the implementation of your advertising campaign from idea to launch and final results.
          "
          image={theme === "m-light" ? "images/2.svg" : "images/link.svg"}
        />
        <ServiceCard
          title="PR"
          description="We develop a strategy for the
          presence of your business in
          social networks and produce the
          necessary content for each of
          the platforms. Promote your
          product."
          image={theme === "m-light" ? "images/4.svg" : "images/ai.svg"}
        />
      </div>
    </div>
  );
};

export default Services;
