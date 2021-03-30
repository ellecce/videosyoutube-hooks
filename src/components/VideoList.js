import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelectApp }) => {
  const RenderedVideosList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelectList={onVideoSelectApp} />;
  });
  return <div className="ui relaxed divided list">{RenderedVideosList}</div>;
  // return "";
};

export default VideoList;
