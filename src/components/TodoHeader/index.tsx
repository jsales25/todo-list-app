import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const TodoHeader = () => {
  const context = useContext(ThemeContext);

  const { theme, toggleTheme } = context;

  return (
    <header className="flex justify-between p-5 items-center mb-6">
      <h1 className="text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem]">
        TODO
      </h1>

      <button className="cursor-pointer" onClick={toggleTheme}>
        <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Alternar tema" />
      </button>
    </header>
  );
};

export default TodoHeader;
