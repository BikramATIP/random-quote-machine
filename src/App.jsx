import { useState, useEffect } from 'react';
import quotes from './sample/quotes.json'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
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

  useEffect(() => {
    updateQuote();
  }, [])

  const formatTag = (tag) => {
    return tag.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };
  
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content}" - ${quote.author}`)}`;
  const authorUrl = `http://www.google.com/search?q=${encodeURIComponent(`${quote.author}`)}`;

  return (
    <div className="container">
    
      <div className="card" id="quote-box">
        <button onClick={updateQuote} id="new-quote">
          Get Quote
        </button>
        
          <p className="quote" id="text">{quote.content}</p>
  
        <ul className="category-container">
          {quote.tags.map((tag, index) => (
            <div className="wrapper" key={index}>
              <li className="wrapper category">{formatTag(tag)}</li>
            </div>
          ))}
        </ul>
        {quote.author && (<a href={authorUrl}><p id="author" className="author">{`- ${quote.author}`}</p>
         </a>)}
        <a id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
      </div>
    </div>
  );
}


export default App;