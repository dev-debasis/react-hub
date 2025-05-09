import React from "react";

function Accordion(props) {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="border-1 border-[#F3F4F6] px-6 py-2 w-[35%] rounded-xl shadow-xl text-[#6D28D9] cursor-pointer" onClick={() => props.toggle(props.id)}>
        <div className="flex items-center justify-between gap-2 text-md font-semibold">
          <h1>{props.question}</h1>
          <span>{props.isOpen? "-" : "+"}</span>
        </div>

        <div className={`ml-5 mt-2 text-[#6B7290] text-sm transition-all duration-300 ease-in-out ${props.isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
