import ProjectCard from "@/common/ProjectCard";
import SectionHeader from "@/common/SectionHeader";
import styles from "@/styles/Portfolio.module.scss";
import React from "react";

const Portfolio = () => {
  return (
    <div id="projects" className={`mt-32 ${styles.projects}`}>
      <SectionHeader header="strength" prefix="our" />
      <div className="flex justify-between mt-20">
        <ProjectCard
          title="Edit the Emotions"
          service="video editing"
          description="We are not creating videos, we create emotions. Mostly we edit all kinds of videos from Podcast to Roast videos."
          image="images/video.jpg"
        />
        <ProjectCard
          title="Improve the CTR"
          service="Thumbnail Design"
          description="We have the best designers who help creators get maximum views and attention span in the video."
          image="images/thumbnail.png"
        />
        <ProjectCard
          title="Strategic Content campaign"
          service="Social Media Growth"
          description="It’s all about attention and relatability. Learn the algorithm and make a strategy accordingly. We implemented a content campaign on Social Media to enhance the growth of our clients."
          image="images/socialmedia.png"
        />
      </div>
    </div>
  );
};

export default Portfolio;
