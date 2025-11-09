import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outifit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: 'AAI Web | %s',
    default: 'AAI Web | Main',
  },
  description: "Hello, Thanks to reach my personal web, My Name is Adam Alfarizi Ismail an Software Developer or Engineer that specialize in Mobile and Web Apps with great fundamentals in engineering code to enhance analytical and logical thinking",
  keywords: [
    'aai',
    'adamalfarizi',
    "adamalfarizi portofolio",
    "adamalfarizi web",
    "aai web",
    "portofolio aai",
    "portofolio web",    
  ],
  openGraph: {
    type: "website",
    title: "AAI Web | Main",
    description: "Hello, Thanks to reach my personal web, My Name is Adam Alfarizi Ismail an Software Developer or Engineer that specialize in Mobile and Web Apps with great fundamentals in engineering code to enhance analytical and logical thinking",
    siteName: "AAI Web",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outifit.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
