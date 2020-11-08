import Image from "next/image";
import React from "react";
import MyEmail from "./myEmail";

const Header = () => {
  return (
    <div className="mx-12 mt-3 hidden md:flex justify-between">
      <Image src="/images/logo.svg" width="72" height="72" alt="logo" />
      <MyEmail />
    </div>
  );
};

export default Header;
