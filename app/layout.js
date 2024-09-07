import localFont from "next/font/local";
import "./globals.css";
import Homebutton from "../components/homebutton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Moviewallah",
  description: "An OMDb API based movie searching website like IMDb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Homebutton />
        {children}
      </body>
    </html>
  );
}
