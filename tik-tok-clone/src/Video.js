import React, { useRef, useState } from "react";
import VideoFooter from './VideoFooter';
import './Video.css';

function Video() {
  const [playing, setplay] = useState(false); // this is saying by default the video is not playing
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing){
      videoRef.current.pause();
      setplay(false);
    }else{
      videoRef.current.play();
      setplay(true);
    }
  };

  return (
    <div className="video">
      <video
      className="video__player"
      loop
      onClick={onVideoPress}
      ref={videoRef}
      src="https://v16m-default.akamaized.net/41a814ec4754ae120e3e77dd7f81bc13/5f974f75/video/tos/useast2a/tos-useast2a-ve-0068c001/47c916449ae14dfaa7a4e85ece5c5917/?a=0&br=2536&bt=1268&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202010261635500101890722165E049CD0&lr=all&mime_type=video_mp4&qs=0&rc=ajlpZnB0Z3hmeDMzaTczM0ApZmQ7Mzw0ZTszNzxoZmZpNGcub2NrZHNtc19fLS0zMTZzc2ItNS8zMTMyMzEzLl80LmE6Yw%3D%3D&vl=&vr=">
      </video>
      <VideoFooter />
    </div>
  );
}

export default Video;
