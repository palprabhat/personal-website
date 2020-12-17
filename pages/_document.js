import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "@utils/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />

          <link rel="icon" href="/favicon/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700&family=Quattrocento+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Portfolio | Full-stack web developer"
          />
          <meta name="author" content="Prabhat Pal" />
          <meta
            name="keywords"
            content="prabhatpal,Prabhat,Prabhat Pal,Prabhat Kumar Pal,PrabhatKumarPal,pal,react,reactjs,javascript,nextjs,js,html,css,tailwindcss,UI,UX,Designer,UI Designer,Web Design,Web Page,Blewsoft,UI/UX Designer,Front End,Front End Developer,back-end,backend,backend developer,software developer,python,code,coder"
          />

          <meta property="og:title" content="Prabhat Kumar Pal" />
          <meta
            property="og:description"
            content="Portfolio | Full-stack web developer"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            itemProp="image"
            content="http://www.prabhatpal.com/_next/image?url=%2Fimages%2Flogo.svg"
          />
          <meta property="og:image:width" content="255" />
          <meta property="og:image:height" content="255" />
          <meta property="og:url" content="http://www.prabhatpal.com" />
          <meta name="twitter:card" content="summary" />

          {process.env.NODE_ENV === "production" ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                      });
                  `,
                }}
              />
            </>
          ) : null}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
