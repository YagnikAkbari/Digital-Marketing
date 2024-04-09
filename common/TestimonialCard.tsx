import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const TestimonialCard = ({
  image,
  client,
  organization,
  service,
  title,
  description,
  designation,
}: {
  image: string;
  client: string;
  organization: string;
  service: string;
  title: string;
  description: string;
  designation: string;
}) => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <div
      className={`testimonial-card ${
        theme === "m-light" ? "l-testimonial-card" : ""
      }`}
    >
      <div className="testimonial-desc">
        <p className="service-tag">{service ?? "video editing"}</p>
        <h3>{title ?? "title"}</h3>
        <p className="description">
          {description ?? "lorem ipsum description not given for this card"}
        </p>
      </div>
      <div className="client-section">
        <img src={image} alt="title" className="client-image" />
        <h3 className="cilent-name">{client ?? "Client"}</h3>
        <p className="client-description">
          <span>{designation ?? ""}</span> {designation ? "of" : ""}{" "}
          {organization ?? "ABC Inc."}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
