import "@mantine/core/styles.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Work_Sans } from "next/font/google";
import { theme } from "../theme";

export const metadata = {
  title: "Slaylist",
  description: "Create your own daily Slaylist artwork",
};

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={worksans.className}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://slaylist.dev" />
        <meta name="twitter:title" content="slaylist" />
        <meta
          name="twitter:description"
          content="a custom daylist image generator"
        />
        <meta
          name="twitter:image"
          content="https://slaylist.dev/images/preview.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="slaylist" />
        <meta
          property="og:description"
          content="a custom daylist image generator"
        />
        <meta property="og:site_name" content="slaylist" />
        <meta property="og:url" content="https://slaylist.dev" />
        <meta
          property="og:image"
          content="https://slaylist.dev/images/preview.png"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
