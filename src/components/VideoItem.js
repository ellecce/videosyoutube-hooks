import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelectList }) => {
  return (
    <div
      onClick={() => {
        onVideoSelectList(video);
      }}
      key={video.id.videoId}
      className="video-item item"
    >
      <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} className="ui image"></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
