"use client";

import { Inter } from "next/font/google";
import { useContext } from "react";
import { ThemeContext } from "@/context/theme-context";
import ScrollToTop from "@/common/ScrollTop";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Technology from "@/components/Technologys";
import SectionExperience from "@/components/Experiences";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${inter.variable} text-gray-100 ${
        theme == false ? "bg-zinc-950" : "bg-white"
      }`}
    >
      <Header />
      <ScrollToTop />
      <Banner />
      <About />
      <Technology />
      <SectionExperience />
      <Works />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
