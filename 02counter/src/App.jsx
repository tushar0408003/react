import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  
  const addvalue = () =>{
    if(count<20)
    setCount(count+1)}

    const removevalue = () =>{
      if(count > 0)
      setCount(count-1)
    
    
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2 >counter value : {count} </h2>
      <button onClick={addvalue}>add value{count}</button>
      <br />
       <button onClick={removevalue}>remove value{count}</button> 
      <p>footer:{count}</p>
  </>
  )
}

export default App
