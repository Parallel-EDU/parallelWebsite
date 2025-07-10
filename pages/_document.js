import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <title>Parallel EDU</title>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  );
}
