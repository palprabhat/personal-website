import React from "react";

const BrandLink = ({ link, iconClass, ariaLabel }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`${iconClass} text-3xl text-primary-500 hover:text-primary-600 focus:text-primary-600 active:text-primary-700`}
    />
  );
};

export default BrandLink;
