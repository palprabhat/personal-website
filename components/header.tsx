import React, { FC } from "react";
import Image from "next/image";
import { headerTestId, logoId } from "../constants/testIds.const";
import MyEmail from "./myEmail";

const Header: FC = () => {
  return (
    <div
      className="mx-12 mt-3 hidden md:flex justify-between"
      data-testid={headerTestId}
    >
      <Image
        src="/images/logo.svg"
        width="72"
        height="72"
        alt="logo"
        data-testid={logoId}
      />
      <MyEmail />
    </div>
  );
};

export default Header;
