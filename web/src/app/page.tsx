"use client";

import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contact";
import { SectionExperience } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Technology } from "@/components/Technologys";
import { ThemeContext } from "@/theme-context";
import Image from "next/image";
import { Roboto_Flex as Roboto } from "next/font/google";
import { useContext } from "react";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <body
      className={`${roboto.variable} font-sans text-gray-100 ${
        theme == false ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1344px] mx-auto h-screen">
        <Header />
        <Banner />
        <About />
        <Technology />
        <SectionExperience />
        <Contact />
        <Footer />
      </div>
    </body>
  );
}
