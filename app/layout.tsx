import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drisos --- It is a LifeStyle",
  description: "Drisos gives you the best experience you can get",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
