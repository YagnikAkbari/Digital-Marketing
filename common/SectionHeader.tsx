import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const SectionHeader = ({
  header,
  prefix,
}: {
  header: string;
  prefix?: string;
}) => {
  const theme = useSelector((state: RootState) => state?.theme);
  return (
    <h2
      className={`primary-header ${
        theme === "m-light" ? "l-primary-header" : ""
      }`}
    >
      <span className="">{prefix ?? ""}</span>
      {header ?? ""}
    </h2>
  );
};

export default SectionHeader;
