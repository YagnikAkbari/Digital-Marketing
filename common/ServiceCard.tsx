import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const ServiceCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      className={`service-card ${theme === "m-light" ? "l-service-card" : ""}`}
    >
      <img src={image} alt={title + "..."} />
      <h3>{title ?? "title"}</h3>
      <p>{description ?? "lorem ipsum description not given for this card"}</p>
    </div>
  );
};

export default ServiceCard;
