import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Yerosen Tamrat | Frontend Developer",
  description: "Frontend Developer & A2SV Member based in Addis Ababa, Ethiopia. Building clean, fast web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${jetbrains.variable} font-sans bg-bg text-[#f2fdff]`}>
        {children}
      </body>
    </html>
  );
}
