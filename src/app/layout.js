import localFont from "next/font/local";
import "./globals.css";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Sidebar from "@/partials/Sidebar";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <div className="flex">
          <Sidebar/>
          <div
            className="container mx-auto py-8"
          >
            
            {children}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
