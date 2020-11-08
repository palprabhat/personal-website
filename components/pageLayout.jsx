import Header from "./header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
