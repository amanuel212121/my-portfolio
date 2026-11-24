import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Gibeamanuel Hibstu | Software Engineering & Management Student",
  description:
    "Gibeamanuel Hibstu is a 4th-year Software Engineering student at Woldia University and a 4th-year student at Encodo College, Faculty of Business and Management, focused on full-stack development, modern web applications, and practical digital solutions.",
  keywords: [
    "Gibeamanuel Hibstu",
    "Software Engineering Student",
    "Management Student",
    "Full-Stack Developer",
    "Software Engineer",
    "Woldia University",
    "Encodo College",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "PHP",
    "MySQL",
    "Portfolio",
  ],
  authors: [{ name: "Gibeamanuel Hibstu" }],
  creator: "Gibeamanuel Hibstu",
  metadataBase: new URL("https://amanuel212121.github.io"),
  alternates: {
    canonical: "/my-portfolio/",
  },
  openGraph: {
    title: "Gibeamanuel Hibstu | Software Engineering & Management Student",
    description:
      "4th-year Software Engineering student at Woldia University and 4th-year student at Encodo College, Faculty of Business and Management | Full-Stack Developer.",
    url: "https://amanuel212121.github.io/my-portfolio/",
    siteName: "Gibeamanuel Hibstu Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gibeamanuel Hibstu | Software Engineering & Management Student",
    description:
      "Software Engineering & Management student and Full-Stack Developer from Ethiopia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-900 text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}