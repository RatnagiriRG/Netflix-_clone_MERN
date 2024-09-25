import React from "react";
import "./Player_Style.css";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  return (
    <div className="player-container">
      <div className="player">
        
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </div>
  );
}
