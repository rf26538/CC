import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(3);
  // let counter = 15;

  const addValue = () => {
    setCounter(counter + 1)
    // setCounter((preCounter) => preCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={removeValue}
      >Remove Value  </button>
    </>
  )
}

export default App
