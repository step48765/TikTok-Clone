import React, { useRef } from "react"
import './Video.css'

function Video() {
  const videoRef = useRef(null);

  const onVideoPress = () => {
    videoRef.current.play();
  };

  return (
    <div className="video">
      <video
      className="video__player"
      loop
      onClick={onVideoPress}
      ref={videoRef}
      src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/0d3438d076ca4df38cb15980793839d2/?a=1988&br=5026&bt=2513&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1603714437&l=2020102606134301018907203422033344&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=M3Rzbm1neGx5djMzNDczM0ApZWdpOjk4Z2VnNzs1OTwzO2dpamhqLi9pbmRfLS1gMTZzczIxYS8xLTUzYzMyLmI0NF86Yw%3D%3D&signature=e63f3fa46ca81d17ee9c81cdd553c67e&tk=tt_webid_v2&vl=&vr="></video>
    </div>
  );
}

export default Video;
