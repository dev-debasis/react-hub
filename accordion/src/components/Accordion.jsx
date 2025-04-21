import React from "react";

function Accordion(props) {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="border-1 border-[#F3F4F6] px-6 py-2 w-[35%] rounded-xl shadow-xl text-[#6D28D9] cursor-pointer" onClick={() => props.toggle(props.id)}>
        <div className="flex items-center justify-between gap-2 text-md font-semibold">
          <h1>{props.question}</h1>
          <span>+</span>
        </div>

        <div className="ml-5 mt-2 text-[#6B7290] text-sm">
          <p>{props.select? props.answer : null}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
