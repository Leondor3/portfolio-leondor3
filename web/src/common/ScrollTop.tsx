import { ThemeContext } from "@/context/theme-context";
import { useContext, useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 z-[99] max-lg:top-1/2 bottom-12 ">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-blue-600/20 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <span
            className={`mt-[6px] h-3 w-3 rotate-45 border-l border-t ${
              theme == false ? "border-white" : "border-black"
            }`}
          ></span>
        </div>
      )}
    </div>
  );
}
