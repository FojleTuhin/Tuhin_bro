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
          href="https://i.ibb.co.com/G7JdQDJ/logo.png"
          sizes="any"
        />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
