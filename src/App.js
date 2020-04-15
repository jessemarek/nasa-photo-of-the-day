import React, { useState, useEffect } from "react";
import ImageCard from './components/ImageCard'
import DropDownList from './components/DropDownList'
import axios from 'axios'

//Import styles
import "./App.css";
import './components/ImageCard.css'
import './components/DropDownList.css'

//BAse URL and my API key for NASA APOD
const baseURL = 'https://api.nasa.gov'
const api_key = 'drf7kPzOSXRGiQ98Bo9Fin8gfGZdVp14nLjjmkcR'

function App() {

  //State that will hold the image data we will be using
  const [imageData, setImageData] = useState(null)
  const [imageDate, setImageDate] = useState('2020-04-15')

  const changeHandler = event => setImageDate(event.target.value)

  useEffect(()=>{
    //Get data for the ImageCard from the API
    axios.get(`${baseURL}/planetary/apod?api_key=${api_key}&date=${imageDate}`)
      
      .then(res => setImageData(res.data) //Set the imageData to the response from the .get() request
      )
      .catch(err => console.log('ERROR: ', err) //Catch the error if there is one and log it to the console
      )
  }, [imageDate])

  return (
    <div className="App">
      
      <DropDownList onChange={changeHandler} date={imageDate} />
      {
        //Once the data has returned create a card with the data
        imageData && <ImageCard imageData={imageData} />
      }
    </div>
  );
}

export default App;
