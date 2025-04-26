import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import React from 'react'

function Star(props) {
  const isFilled = props.hoverIndex !== null
    ? props.index <= props.hoverIndex
    : props.index < props.rating;

  return (
    <div 
        className={`text-3xl cursor-pointer ml-1 ${
          props.hoverIndex !== null?
          props.hoverIndex >= props.index? 'text-yellow-400' : null 
          :
          props.rating > props.index ? 'text-yellow-400' : null}`}
        onClick={() => props.onClick(props.index)}
        onMouseEnter={() => props.onMouseEnter(props.index)}
        onMouseLeave={() => props.onMouseLeave()}
    >
        {isFilled? <IoIosStar /> : <IoIosStarOutline />}
    </div>
  )
}

export default Star