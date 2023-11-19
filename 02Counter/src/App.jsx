import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5) // useState 2 cheze return krta h array m 1st value and 2nd us value s related method
  const addValue = () => {
    setCounter(counter + 1)  // using setCounter method hum counter value increase kr rhe h
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
     <h1>Hello</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br></br>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App;
