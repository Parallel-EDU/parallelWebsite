import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" /> */}
      <title>Parallel EDU</title>
      <Head>
        <meta
          name="google-site-verification"
          content="W8dMzmBp1ePn6PVl8QITnVMWXDuid-3IIA3uRyBHsxQ"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
