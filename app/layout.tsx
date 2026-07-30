import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Providers from "./providers";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index and receive simple health insights to help you better understand your overall wellness.",
  icons: {
    icon: "/bmi_logo.jpeg",
    apple: "/bmi_logo.jpeg",
  },
  openGraph: {
    title: "BMI Calculator",
    description:
      "Calculate your Body Mass Index and receive simple health insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
