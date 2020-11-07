import "../styles/brand-icon.scss";
import "../styles/tailwind.scss";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Prabhat Pal</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
