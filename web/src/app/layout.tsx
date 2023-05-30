import { ThemeProvider } from "@/theme-context";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio web criado com Next.JS, TailwindCSS e Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </html>
  );
}
