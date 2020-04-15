import React from "react";
import ImageCard from './components/ImageCard'
import "./App.css";
import './components/ImageCard.css'

//My API key for NASA APOD
const api_key = 'drf7kPzOSXRGiQ98Bo9Fin8gfGZdVp14nLjjmkcR'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <ImageCard />
    </div>
  );
}

export default App;
