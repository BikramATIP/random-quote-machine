import { useState, useEffect } from 'react';
import './App.css'


function App() {
  
  const getQuote = async () => {
    try {
      const response = await fetch('https://timshim-quotes-v1.p.rapidapi.com/quotes')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('There was an error: ', error)
    }
  }

  getQuote();



  
  return (
    <>
      <h1>Random Quote Generator</h1>
      <div className="card">
        <button>
          Get Quote
        </button>
        
      </div>
      <p className="read-the-docs">  
       
      </p>
    </>
  )
}


export default App
