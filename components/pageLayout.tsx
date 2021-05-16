import { FC } from "react";
import Header from "./header";

const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
