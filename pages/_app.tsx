import "@styles/brand-icon.scss";
import "@styles/tailwind.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@utils/gtag";
import { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const handleRouteChange = (url: any) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

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
