import { useState, useEffect } from 'react';
import quotes from './sample/quotes.json'
import './App.css'

function App() {
  const [quote, setQuote] = useState({
    content: '',
    author: '',
    tags: []
  });

  const updateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  const formatTag = (tag) => {
    return tag.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <div className="card">
        <button onClick={updateQuote}>
          Get Quote
        </button>
        {quote.content && quote.author && (
          <p className="quote">  
            {`"${quote.content}" - ${quote.author}`}
          </p>
        )}
        <ul className="category-container">
          {quote.tags.map((tag, index) => (
            <div className="wrapper" key={index}>
              <li className="category">{formatTag(tag)}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;