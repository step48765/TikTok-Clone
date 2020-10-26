import React from 'react';
import Video from "./Video"
import './App.css';

function App() {
  return (
    //BEM convention
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
