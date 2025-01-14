import { useState, useEffect } from 'react';
import quotes from './sample/quotes.json'
import './App.css'


function App() {
  const [quote, setQuote] = useState({"author": "Abraham Lincoln", "content": "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.", "tags": "famous-quotes"})
  
  const updateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote)
  }
  
  return (
    <>
      <h1>Random Quote Generator</h1>
      <div className="card">
        <button onClick={updateQuote}>
          Get Quote
        </button>

      </div>
      <p className="read-the-docs">  
       {quote.content}
      </p>
    </>
  )
}


export default App
