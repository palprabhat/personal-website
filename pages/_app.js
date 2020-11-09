import "@styles/brand-icon.scss";
import "@styles/tailwind.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@utils/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (
  //     process.env.NODE_ENV === "production" &&
  //     process.env.NEXT_PUBLIC_GA_TRACKING_ID
  //   ) {
  //     const handleRouteChange = (url) => {
  //       gtag.pageview(url);
  //     };
  //     router.events.on("routeChangeComplete", handleRouteChange);
  //     return () => {
  //       router.events.off("routeChangeComplete", handleRouteChange);
  //     };
  //   }
  // }, [router.events]);

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
