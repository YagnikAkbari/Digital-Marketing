import ProjectCard from "@/common/ProjectCard";
import SectionHeader from "@/common/SectionHeader";
import styles from "@/styles/Portfolio.module.scss";
import React from "react";

const Portfolio = () => {
  return (
    <div id="projects" className={`mt-32 ${styles.projects}`}>
      <SectionHeader header="portfolio" prefix="our" />
      <div className="flex justify-between mt-20">
        <ProjectCard
          title="Dynamic Promo Video"
          service="video editing"
          description="Crafted a compelling promotional video for a client's product launch, seamlessly blending visuals, music, and narrative to captivate the audience."
          image="images/sunset.jpg"
        />
        <ProjectCard
          title="Instagram Reel Campaign"
          service="reel posting"
          description="Managed a successful Instagram Reel campaign for a lifestyle brand, curating and posting a series of engaging short videos."
          image="images/insta.jpg"
        />
        <ProjectCard
          title="Strategic Content Campaign Campaign"
          service="linkedin growth"
          description="Implemented a targeted content campaign on LinkedIn to enhance organic growth for a professional services firm. Developed and curated industry-relevant articles"
          image="images/linkedin.jpg"
        />
      </div>
    </div>
  );
};

export default Portfolio;
