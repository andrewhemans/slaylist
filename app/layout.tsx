import "@mantine/core/styles.css";
import React from "react";
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
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
