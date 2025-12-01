import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-red-900 text-white flex flex-col items-center justify-center p-8">
      <div className="mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="inline-block mx-4"
        >
          <img
            src={viteLogo}
            className="h-24 p-6 hover:filter hover:drop-shadow-lg transition-all duration-300"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="inline-block mx-4"
        >
          <img
            src={reactLogo}
            className="h-24 p-6 hover:filter hover:drop-shadow-lg transition-all duration-300 animate-spin"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Vite + React
      </h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-300">
          Edit{" "}
          <code className="bg-gray-700 px-2 py-1 rounded text-yellow-400">
            src/App.jsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-gray-400 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
