import React from "react";

const ProjectCard = ({
  title,
  service,
  description,
  image,
}: {
  title: string;
  service: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title + "..."} />
      <div className="project-content">
        <p className="service-tag">{service ?? "video editing"}</p>
        <h3>{title ?? "title"}</h3>
        <p className="project-description">
          {description ?? "lorem ipsum description not given for this card"}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
