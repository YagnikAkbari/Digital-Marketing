import React from "react";

const ServiceCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className={"service-card"}>
      <img src={image} alt={title + "..."} />
      <h3>{title ?? "title"}</h3>
      <p>{description ?? "lorem ipsum description not given for this card"}</p>
    </div>
  );
};

export default ServiceCard;
