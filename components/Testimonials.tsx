import SectionHeader from "@/common/SectionHeader";
import TestimonialCard from "@/common/TestimonialCard";
import { RootState } from "@/store/store";
import styles from "@/styles/Testimonials.module.scss";
import React from "react";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      id="testimonials"
      className={`mt-32 ${styles.testimonials} ${
        theme === "m-light" ? styles["l-testimonials"] : ""
      }`}
    >
      <SectionHeader header="testimonials" />
      <div className="grid grid-cols-3 justify-center mt-20">
        <TestimonialCard
          service="video editing"
          title="Dynamic Promo Video"
          description="I recently had the pleasure of working with GrowwitUp, and I must say, I am beyond impressed with their video editing services. From start to finish, they were professional, efficient, and truly went above and beyond to bring my vision to life. Their editing skills are top-notch, and they were able to transform my raw footage into a visually stunning masterpiece. Not only that, but their fast delivery time was a huge bonus. I was able to meet my tight deadline without sacrificing the quality of the final product. But what truly sets GrowwitUp apart is their incredible value for money. I was blown away by the level of quality and attention to detail I received at such an affordable price. It's clear that they truly care about their clients and delivering exceptional results. I highly recommend GrowwitUp to anyone in need of video editing services. They exceeded my expectations in every way and I will definitely be using their services again in the future. Thank you GrowwitUp for your great editing, fast delivery, and unbeatable value for money. You have a loyal customer in me!`"
          client="Arnav M."
          designation="ceo"
          organization="OutPerform"
          image="images/outperform.png"
        />
        <TestimonialCard
          service="Socail Media"
          title="Youtube Management and Strategy"
          description="I cannot thank Growwitup enough for the incredible help they provided in boosting my YouTube channel's success. As a content creator, gaining subscribers is crucial for growth and exposure, and Growwitup made it happen for me. Their expertise in YouTube SEO is unmatched, and I saw a significant increase in my subscriber count after implementing their strategies. Not only did they help me gain subscribers, but they also provided valuable insights and tips to improve my overall channel performance. I highly recommend Growwitup to anyone looking to take their YouTube channel to the next level. Thank you, Growwitup, for your amazing work!"
          client="Kunal Kanchan"
          designation="ceo"
          organization="Kishan Kunal Kanchan"
          image="images/OFk.jpg"
        />
        <TestimonialCard
          service="youtube"
          title="Thumbnail design"
          description="I have always wanted a team that can understand my vision and put it into the designs. I really loved the creativity he puts in the work & this is the reason i try to give as much creative freedom as i can!Timely deliveries & active coordination is a plus point! Looking forward to work with him again in future. 💯"
          client="Detective Vicky"
          designation=""
          organization="youtuber"
          image="images/vicky.jpg"
        />
      </div>
    </div>
  );
};

export default Testimonials;
