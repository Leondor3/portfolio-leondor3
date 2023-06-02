"use client";

import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contact";
import { SectionExperience } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Technology } from "@/components/Technologys";
import { Inter } from "next/font/google";
import { useContext } from "react";
import { Works } from "@/components/Works";
import { ThemeContext } from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <body
      className={`${inter.variable} font-sans text-gray-100 ${
        theme == false ? "bg-[#12141d]" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1344px] mx-auto h-screen">
        <Header />
        <Banner />
        <About />
        <Technology />
        <SectionExperience />
        <Works />
        <Contact />
        <Footer />
      </div>
    </body>
  );
}
