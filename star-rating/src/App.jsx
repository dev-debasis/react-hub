import React, { useState } from 'react'
import Star from './components/Star'

function App() {

  const [hoverIndex, setHoverIndex] = useState(null)
  const [rating, setRating] = useState(null)

  const totalStars = 5
  const starArray = Array(totalStars).fill(0)

  const starElements = starArray.map((_,index) => {
     
    return <Star 
      key={index}
      index={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      hoverIndex={hoverIndex}
      rating={rating}
    />
  })

  function handleMouseEnter(index){
    setHoverIndex(index)
  }
  function handleMouseLeave(){
    setHoverIndex(null)
  }
  function handleClick(index){
    setRating(index+1)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      {starElements}
    </div>
  )
}

export default App
