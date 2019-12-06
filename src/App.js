import React from 'react';
import './App.css';
import Quotes from './Components/script.js';

function App() {
  
  return (
    <div className="App">
      <h1>Welcome to the random quote generator - get motivated, and find new inspirational people!</h1>
      <h2>Every 5 seconds, this page will give you a brand new inspirational quote...</h2>
     <Quotes/>
    </div>
 
  );
}

export default App;
