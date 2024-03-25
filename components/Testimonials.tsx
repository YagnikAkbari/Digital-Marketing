import SectionHeader from "@/common/SectionHeader";
import TestimonialCard from "@/common/TestimonialCard";
import styles from "@/styles/Testimonials.module.scss";
import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials" className={`mt-32 ${styles.testimonials}`}>
      <SectionHeader header="testimonials" />
      <div className="flex justify-between mt-20">
        <TestimonialCard
          service="video editing"
          title="Dynamic Promo Video"
          description="I recently had the pleasure of working with GrowwitUp, and I must say, I am beyond impressed with their video editing services. From start to finish, they were professional, efficient, and truly went above and beyond to bring my vision to life. Their editing skills are top-notch, and they were able to transform my raw footage into a visually stunning masterpiece. Not only that, but their fast delivery time was a huge bonus. I was able to meet my tight deadline without sacrificing the quality of the final product. But what truly sets GrowwitUp apart is their incredible value for money. I was blown away by the level of quality and attention to detail I received at such an affordable price. It's clear that they truly care about their clients and delivering exceptional results. I highly recommend GrowwitUp to anyone in need of video editing services. They exceeded my expectations in every way and I will definitely be using their services again in the future. Thank you GrowwitUp for your great editing, fast delivery, and unbeatable value for money. You have a loyal customer in me!`"
          client="Jhon Doe"
          designation="ceo"
          organization="OutPerform"
          image="images/man.svg"
        />
        <TestimonialCard
          service="video editing"
          title="Dynamic Promo Video"
          description="I cannot thank Growwitup enough for the incredible help they provided in boosting my YouTube channel's success. As a content creator, gaining subscribers is crucial for growth and exposure, and Growwitup made it happen for me. Their expertise in YouTube SEO is unmatched, and I saw a significant increase in my subscriber count after implementing their strategies. Not only did they help me gain subscribers, but they also provided valuable insights and tips to improve my overall channel performance. I highly recommend Growwitup to anyone looking to take their YouTube channel to the next level. Thank you, Growwitup, for your amazing work!"
          client="Jhon Doe"
          designation="ceo"
          organization="Quick Mantra"
          image="images/man.svg"
        />
        <TestimonialCard
          service="video editing"
          title="Dynamic Promo Video"
          description="Crafted a compelling promotional video for a client's product launch, seamlessly blending visuals, music, and narrative to captivate the audience."
          client="Jhon Doe"
          designation="ceo"
          organization="Apples’s to Oragnes"
          image="images/man.svg"
        />
      </div>
    </div>
  );
};

export default Testimonials;
