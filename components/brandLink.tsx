import React, { FC } from "react";

interface BrandLink {
  link: string;
  iconClass: string;
  ariaLabel: string;
  testId: string;
}

const BrandLink: FC<BrandLink> = ({ link, iconClass, ariaLabel, testId }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`${iconClass} text-3xl text-primary-500 hover:text-primary-600 focus:text-primary-600 active:text-primary-700`}
      data-testid={testId}
    />
  );
};

export default BrandLink;
