import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yeti Racing",
  description: "",
  icons: {
    icon: '/assets/logo1.png', // Path to your logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/logo1.png" /> {/* Add favicon link */}
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}