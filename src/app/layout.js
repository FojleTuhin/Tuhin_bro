import "./globals.css";
import { Space_Grotesk } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const manrope = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fojle Tuhin",
  description: "Created by Tuhin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          rel="icon"
          href="https://i.ibb.co.com/zWp6TPgt/logoT.png"
          type="image/svg+xml"
        />
        <meta property="og:title" content="Fojle Tuhin" />
        <meta property="og:description" content="MERN Stack Developer" />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/zWp6TPgt/logoT.png"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
