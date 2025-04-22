import React, { useState } from "react";

function App() {
  const [colorType, setColorType] = useState("hex");
  const [colorCode, setColorCode] = useState("#FFFFFF");
  const [copied, setCopied] = useState(false);

  function defineColorType(type) {
    setColorType(type);
  }
  function generateHexColor() {
    const codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += codes[Math.floor(Math.random() * codes.length)];
    }
    return hexCode;
  }
  function generateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  }
  function generateRandomColor() {
    if (colorType === "hex") {
      const hexCode = generateHexColor();
      setColorCode(hexCode);
    } else {
      const rgbCode = generateRgbColor();
      setColorCode(rgbCode);
    }
  }
  function handleCopy() {
    navigator.clipboard.writeText(colorCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  const styles = {
    backgroundColor: colorCode,
  };
  return (
    <div
      className="flex flex-col items-center justify-center p-10 h-screen w-screen"
      style={styles}
    >
      <h1 className="text-3xl font-semibold uppercase text-[#6D28D9]">
        Random Color Generator
      </h1>
      <section className="mt-15">
        <button
          className={`rounded-lg px-3 py-2 mr-5 shadow-xl border-1 border-cyan-500 text-sm font-semibold cursor-pointer transition-all duration-300 ease-in-out ${
            colorType === "hex"
              ? "bg-[#6D28D9] text-white"
              : "hover:bg-[#6D28D9] hover:text-white"
          }`}
          onClick={() => defineColorType("hex")}
        >
          Create HEX Color
        </button>

        <button
          className={`rounded-lg px-3 py-2 mr-5 shadow-xl border-1 border-cyan-500 text-sm font-semibold cursor-pointer transition-all duration-300 ease-in-out ${
            colorType === "rgb"
              ? "bg-[#6D28D9] text-white"
              : "hover:bg-[#6D28D9] hover:text-white"
          }`}
          onClick={() => defineColorType("rgb")}
        >
          Create RGB Color
        </button>

        <button
          className="rounded-lg px-3 py-2 mr-5 shadow-xl border-1 border-cyan-500 text-sm font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#6D28D9] hover:text-white"
          onClick={generateRandomColor}
        >
          Generate Random Color
        </button>
      </section>

      <h1 className="mt-20 text-3xl cursor-pointer" onClick={handleCopy}>
        {colorCode}
      </h1>
      <p className="text-sm font-thin">
        * click the color code to copy to in the clipboard
      </p>
      {copied && (
        <div className="absolute bottom-26 bg-black text-white px-4 py-2 rounded-lg shadow-md text-sm animate-fade-in-out z-50">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default App;
