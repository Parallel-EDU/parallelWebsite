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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RJ5QG86J13"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RJ5QG86J13');
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
