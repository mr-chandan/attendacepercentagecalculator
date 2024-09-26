import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attendance Checker - Track Your Class Attendance Easily",
  description:
    "Easily calculate and track your class attendance. Find out how many classes you need to attend or can miss to achieve your desired attendance percentage.",
  keywords:
    "attendance tracker, class attendance, attendance calculator, school attendance, college attendance, attendance management, bunk classes attendance percentage calculator , attendance to percentage , attendance 75 , 75 attendance ",
  applicationName: "Attendance Checker",
  openGraph: {
    title: "Attendance Checker - Track Your Class Attendance Easily",
    description:
      "Use this app to calculate your attendance percentage and figure out how many classes you need to attend or can miss.",
    url: "https://attendacepercentagecalculator.vercel.app/",
    siteName: "Attendance Checker",
    images: [
      {
        url: "/homepage.png", 
        width: 1200,
        height: 630,
        alt: "Attendance Checker App",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Attendance Checker - Track Your Class Attendance Easily",
  //   description:
  //     "Easily calculate your attendance and find out how many classes you need to attend or can miss.",
  //   creator: "@your_twitter_handle", // Replace with your Twitter handle
  //   images: ["https://yourwebsite.com/twitter-image.jpg"], // Add your image URL
  // },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="general" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Attendance Checker - Track Your Class Attendance Easily"
        />
        <meta
          property="og:description"
          content="Use this app to calculate your attendance percentage and figure out how many classes you need to attend or can miss."
        />
        <meta property="og:url" content="https://attendacepercentagecalculator.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://attendacepercentagecalculator.vercel.app/icons/icon-192x192.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Attendance Checker - Track Your Class Attendance Easily"
        />
        <meta
          name="twitter:description"
          content="Easily calculate your attendance and find out how many classes you need to attend or can miss."
        />
        <meta
          name="twitter:image"
          content="https://attendacepercentagecalculator.vercel.app/icons/icon-192x192.png"
        />

        {/* Favicon and Apple Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Title and Description */}
        <title>Attendance Checker - Track Your Class Attendance Easily</title>
        <meta
          name="description"
          content="Easily calculate and track your class attendance. Find out how many classes you need to attend or can miss to achieve your desired attendance percentage."
        />

        {/* Google Analytics or any tracking script */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID');
            `,
          }}
        /> */}
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
