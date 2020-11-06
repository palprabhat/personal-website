import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=2.0"
          />

          <title>Prabhat Pal</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700&family=Quattrocento+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Prabhat Kumar Pal; UI/UX Developer, Software Developer"
          />
          <meta name="author" content="Prabhat Kumar Pal" />
          <meta
            name="keywords"
            content="prabhatpal,Prabhat,Prabhat Pal,Prabhat Kumar Pal,PrabhatKumarPal,pal,react,reactjs,javascript,nextjs,js,html,css,tailwindcss,UI,UX,Designer,UI Designer,Web Design,Web Page,Blewsoft,UI/UX Designer,Front End,Front End Developer,back-end,backend,backend developer,software developer,python,code,coder"
          />

          <meta property="og:title" content="Prabhat Kumar Pal" />
          <meta
            property="og:description"
            content="Prabhat Kumar Pal; UI/UX Developer, Software Developer"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            itemProp="image"
            content="http://www.prabhatpal.com/meta-images/profilepic.jpg"
          />
          <meta property="og:image:width" content="255" />
          <meta property="og:image:height" content="255" />
          <meta property="og:url" content="http://www.prabhatpal.com" />
          <meta name="twitter:card" content="summary" />
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
