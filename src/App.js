import React, { useState, useEffect } from "react";
import ImageCard from './components/ImageCard'
import axios from 'axios'

//Import styles
import "./App.css";
import './components/ImageCard.css'

//BAse URL and my API key for NASA APOD
const baseURL = 'https://api.nasa.gov'
const api_key = 'drf7kPzOSXRGiQ98Bo9Fin8gfGZdVp14nLjjmkcR'

function App() {

  //State that will hold the image data we will be using
  const [imageData, setImageData] = useState(null)

  useEffect(()=>{
    //Get data for the ImageCard from the API
    axios.get(`${baseURL}/planetary/apod?api_key=${api_key}`)
      
      .then(res => setImageData(res.data) //Set the imageData to the response from the .get() request
      )
      .catch(err => console.log('ERROR: ', err) //Catch the error if there is one and log it to the console
      )
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

        {
          //Once the data has returned create a card with the data
          imageData && <ImageCard imageData={imageData} />
        }
    </div>
  );
}

export default App;
