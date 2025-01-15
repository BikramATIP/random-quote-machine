import { useState, useEffect } from 'react';
import quotes from './sample/quotes.json'
import './App.css'


function App() {
  const [quote, setQuote] = useState("")
  
  const updateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote)
  }
  
  const formatTag = (tag) => {
   return tag.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
  }


  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <div className="card">
        <button onClick={updateQuote}>
          Get Quote
        </button>
        <p className="quote">  
       {quote.content}
      </p>

      <ul className="category-container">
      { quote.tags.map((tag, index) => {
        return <div className="wrapper"><li key={index} className="category">{formatTag(tag)}</li></div>
      })}
       
     
      </ul>
      </div>
    </div>
  )
}


export default App
