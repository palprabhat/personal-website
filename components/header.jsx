import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="mx-12 mt-3 hidden md:flex justify-between">
      <Image src="/images/logo.svg" width="72" height="72" alt="logo" />
      <div className="flex">
        <a
          href="mailto:prahatpal.14@gmail.com"
          className="flex justify-center items-center px-2 group"
        >
          <span className="brand-icon-email mr-1 group-hover:text-primary-600 group-focus:text-primary-600" />
          prahatpal.14@gmail.com
        </a>
        <a
          href="tel:+1 (214) 704 - 6768"
          className="flex justify-center items-center px-2 group"
        >
          <span className="brand-icon-mobile mr-1 group-hover:text-primary-600 group-focus:text-primary-600" />
          +1 (214) 704 - 6768
        </a>
      </div>
    </div>
  );
};

export default Header;
