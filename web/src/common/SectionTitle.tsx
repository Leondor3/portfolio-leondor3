import { ThemeContext } from "@/context/theme-context";
import { useContext } from "react";

const SectionTitle = ({
  title,
  section,
  center,
}: {
  title: string;
  section: string;
  center?: boolean;
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
      >
        <div
          className={`flex items-center gap-2 text-sm text-gray-100 ${
            !center ? "before:h-px before:w-5 before:bg-blue-400" : ""
          }`}
        >
          <span className="w-full leading-relaxed text-blue-400">
            {section}
          </span>
        </div>
        <h2
          className={`text-5xl ${
            theme == false ? "text-light" : "text-dark"
          } font-bold !leading-tight max-sm:text-3xl max-md:text-[45px]`}
        >
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
