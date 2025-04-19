import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='bg-blue-600 p-4'>react router</h1>

        <h2 className='text-2xl text-amber-300'>Count is {count}</h2>
    </>
  )
}

export default App
