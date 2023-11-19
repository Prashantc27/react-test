import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5) // useState 2 cheze return krta h array m 1st value and 2nd us value s related method
  const [errorMessage, setErrorMessage] = useState('');

  const addValue = () => {
    if(counter != 20){
    setCounter(counter + 1)  // using setCounter method hum counter value increase kr rhe h
    setErrorMessage('');
    }else {
      console.log('inside 1');
      setErrorMessage('Value cannot be greater than 20');
    }
  }

  const removeValue = () => {
    if(counter != 0){
    setCounter(counter - 1);
    setErrorMessage('');
    }else {
      console.log('inside 2');
      setErrorMessage('Value cannot be less than 0');
    }
  }
  return (
    <>
     <h1>Hello</h1>
     <h2>Counter Value: {counter}</h2>
     <h3>{errorMessage}</h3>
     <button onClick={addValue}>Add value</button>
     <br></br>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App;
