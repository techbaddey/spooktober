import './App.css'
import Path from './reactRouter'
import background from './spookone.jpg'
import React, { Component } from "react";

// Import your audio file
import song from "./spooky_tone.mp3";

class App extends Component {
 
  render() {
    return (
     
        <div style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', height:'100%' }} className='main'>
   
    <Path /> 
  </div>  
      
    );
  }
}

export default App;

