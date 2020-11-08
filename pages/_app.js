import "../styles/brand-icon.scss";
import "../styles/tailwind.scss";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Prabhat Pal</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
