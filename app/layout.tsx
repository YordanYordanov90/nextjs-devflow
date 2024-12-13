import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A better version of Stack Overflow.",
  icons: {
    icon: ".images/side-logo.svg",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html suppressHydrationWarning lang="en">
        <head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          />
        </head>

        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
