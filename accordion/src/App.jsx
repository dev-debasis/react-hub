import React from 'react'
import Accordion from './components/Accordion'
import faqData from './data.js'
import { useState } from 'react'
import Button from './components/Button.jsx'

function App() {

  const [openId, setOpenId] = useState(null)
  const [multipleOpenId, setMultipleOpenId] = useState([])
  const [isMultiEnable, setIsMultiEnable] = useState(false)
  const accordionElement = faqData.map(obj => 
    <Accordion 
      key={obj.id}
      id={obj.id}
      question={obj.question}
      answer={obj.answer}
      toggle={isMultiEnable? handleMultiToggle : handleSingleToggle}
      isOpen={isMultiEnable? multipleOpenId.includes(obj.id) : openId === obj.id}
    />
  )

  function handleSingleToggle(id){
    setOpenId(prevId => (prevId === id? null : id))
  }
  function handleMultiToggle(id){
    setMultipleOpenId(prevValue => 
      prevValue.includes(id)? prevValue.filter(item => item !== id) : [...prevValue, id]
    )
  }
  function handleButtonClick(){
    setIsMultiEnable(prevValue => !prevValue)
  }
  return (
    <div className='mt-30'>
      <Button 
        label={isMultiEnable? "Switch to Single" : "Switch to Multi"}
        click={handleButtonClick}
      />
      {accordionElement}
    </div>
  )
}

export default App






