import React from "react";

const BrandLink = ({ link, iconClass }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${iconClass} text-3xl text-primary-500 hover:text-primary-600`}
    />
  );
};

export default BrandLink;
