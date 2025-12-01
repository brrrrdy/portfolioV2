import { useState } from "react";
import "./index.css";
import Colors from "./components/Colors";

function App() {
  const [theme, setTheme] = useState("light");

  // Get background classes based on theme
  const getPageBackground = () => {
    return theme === "light" ? "bg-white" : "bg-blue-900";
  };

  const getTextColor = () => {
    return theme === "light" ? "text-gray-900" : "text-white";
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-500 ${getPageBackground()} ${getTextColor()}`}
    >
      <div id="top" className="h-px w-full relative" />

      <div className="absolute top-4 left-4 z-10">
        <Colors theme={theme} setTheme={setTheme} />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <h1 className={`text-4xl font-bold ${getTextColor()}`}>
          Portfolio Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default App;
