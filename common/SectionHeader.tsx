import React from "react";

const SectionHeader = ({
  header,
  prefix,
}: {
  header: string;
  prefix?: string;
}) => {
  return (
    <h2 className="primary-header">
      <span className="">{prefix ?? ""}</span>
      {header ?? ""}
    </h2>
  );
};

export default SectionHeader;
