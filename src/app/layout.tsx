import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Gibeamanuel Hibstu | Full-Stack Developer",
  description:
    "Portfolio of Gibeamanuel Hibstu, Software Engineering Student and Full-Stack Developer from Bahir Dar, Ethiopia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{typeof metadata.title === 'string' ? metadata.title : "Gibeamanuel Hibstu | Full-Stack Developer"}</title>
        <meta name="description" content={typeof metadata.description === 'string' ? metadata.description : "Portfolio of Gibeamanuel Hibstu, Software Engineering Student and Full-Stack Developer from Bahir Dar, Ethiopia."} />
        <meta name="keywords" content="Full-Stack Developer, Software Engineer, Portfolio, React, Next.js, TypeScript" />
        <meta name="author" content="Gibeamanuel Hibstu" />
        <meta property="og:title" content="Gibeamanuel Hibstu | Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Gibeamanuel Hibstu, Software Engineering Student and Full-Stack Developer from Bahir Dar, Ethiopia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-gray-900 text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
