import React from 'react'

function ImageSlider({src, index}) {
  return (
    <div className='w-[80vw] max-w-[400px] h-[60vh] max-h-[200px] flex items-center justify-center overflow-hidden rounded-md border-2 border-cyan-400'>
        <img 
          src={src} 
          alt={`image of index ${index}`} 
          className='w-full h-full object-cover transition-all duration-500 ease-in-out'
        />
    </div>
  )
}

export default ImageSlider