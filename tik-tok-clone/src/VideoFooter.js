import React from "react";
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className ="videoFooter">
      <div className="videoFooter__text">
        <h3>@rafehqzi</h3>
        <p>description</p>
      </div>
      <img className="videoFooter__record"
       src="https://static.thenounproject.com/png/934821-200.png" alt="">
      </img>
    </div>
  );
}

export default VideoFooter;
