import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  variable: "--font-space-grotesk", 
});

export const metadata: Metadata = {
  title: "EduTech Wellness",
  description: "EduTech Wellness",
  icons: {
    icon: '/mainlogo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

