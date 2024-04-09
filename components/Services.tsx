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
      <SectionHeader header="WHAT WE CAN OFFER YOU" />
      <div className="flex justify-between mt-20">
        <ServiceCard
          title="YouTube and Instagram management"
          description="Growwitup helps creators manage their social media, gets them industry insides and also helps them to grow their socials. We help them to narrate their story to the world through Social Media. Personalise content calendar and suggestions from our team. We make them empower the creator community. Let’s begin your journey in this exciting industry with a mission to change something for the world by creating content. "
          image={theme === "m-light" ? "images/3.svg" : "images/search.svg"}
        />
        <ServiceCard
          title="VIDEO EDITING"
          description="Video is an emotion, with great editing, we can change the emotions of others. Growwitup has well-experienced video editors who have worked with growing YouTubers in India helping them create attractive edits that elevate the presence of their social media. 
          "
          image={
            theme === "m-light" ? "images/dark-chat.svg" : "images/sward.svg"
          }
        />
        <ServiceCard
          title="Graphic designing"
          description="We know that what design appeals to people to take action, makes your design at another level. The graphic is an important part to share your story with the world. Design can create different emotions in people. Connect with us and elevate the design of your socials. 
          "
          image={theme === "m-light" ? "images/2.svg" : "images/link.svg"}
        />
        <ServiceCard
          title="Content Planning and Strategy"
          description="Planning is one of the crucial and Important things for the creator, and our team of growwitup can help you to create a content calendar according to the creator’s goals and vision for socials. We build strategies to make an impact and create a virality for the creator."
          image={theme === "m-light" ? "images/4.svg" : "images/ai.svg"}
        />
      </div>
    </div>
  );
};

export default Services;
