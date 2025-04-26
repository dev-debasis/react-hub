import React, { useState } from "react";
import ImageSlider from "./components/ImageSlider";
import firstImg from "./assets/images/first.jpg";
import secondImg from "./assets/images/second.jpg";
import thirdImg from "./assets/images/third.jpg";
import fourthImg from "./assets/images/fourth.jpg";

function App() {
  const imageArr = [firstImg, secondImg, thirdImg, fourthImg];
  const [activeIndex, setActiveIndex] = useState(0);

  function handlePrev() {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageArr.length - 1 : prevIndex - 1
    );
  }
  function handleNext() {
    setActiveIndex((prevIndex) =>
      prevIndex >= imageArr.length - 1 ? 0 : prevIndex + 1
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-center">
        <ImageSlider src={imageArr[activeIndex]} index={activeIndex} />
      </div>

      <div className="flex mt-4 w-[80vw] max-w-[400px] items-center justify-between">
        <button
          onClick={handlePrev}
          className="px-8 py-2 shadow-xl border-1 border-cyan-500 rounded-full cursor-pointer"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-2 shadow-xl border-1 border-cyan-500 rounded-full cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
