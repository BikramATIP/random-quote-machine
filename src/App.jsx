import { useState } from 'react';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

 /* const getQuote = async () => {
    try {
     const res = await fetch('https://zenquotes.io/api/random')
     const data = await res.json();
     return data
     return data
    } catch (error) {
      console.error(`Error: ${error}`)
    }
  } */

  return (
    <>
      <h1>Random Quote Generator</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
