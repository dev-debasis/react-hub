import React from 'react'

function Button(props) {
  return (
    <div className='flex items-center justify-center'>
        <button 
            className='shadow-lg px-5 py-3 rounded-xl border-1 border-[#F3F4F6] font-semibold text-sm text-cyan-500 mb-5 cursor-pointer transition-all hover:px-6 hover:border-cyan-600 hover:text-cyan-600 hover:shadow-2xl'
            onClick={props.click}
        >
            {props.label}
        </button>
    </div>
  )
}

export default Button