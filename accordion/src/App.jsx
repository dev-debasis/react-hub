import React from 'react'
import Accordion from './components/Accordion'
import faqData from './data.js'
import { useState } from 'react'

function App() {

  const [data, setData] = useState(faqData)

  const accordionElement = data.map(obj => 
    <Accordion 
      key={obj.id}
      id={obj.id}
      question={obj.question}
      answer={obj.answer}
      toggle={toggleClick}
      select={obj.selected}
    />
  )

  function toggleClick(id){
   setData(prevValue => 
    prevValue.map(obj => 
      obj.id === id ? {...obj, selected: !obj.selected} : obj
    )
   )
  }
  return (
    <div className='mt-30'>
      {accordionElement}
    </div>
  )
}

export default App