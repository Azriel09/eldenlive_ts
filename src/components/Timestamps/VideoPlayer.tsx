import LoadingComponent from "../global/Loading";
import React from "react";
import ReactPlayer from "react-player";
interface VideoPlayerProps {
  selectedStream: string;
}
const YT_API = import.meta.env.VITE_YOUTUBE_API_KEY;
export default function VideoPlayer({ selectedStream }: VideoPlayerProps) {
  const ref = React.createRef();
  return (
    <>
      {!selectedStream ? (
        <LoadingComponent />
      ) : (
        <ReactPlayer ref={ref} playing controls url={selectedStream} width={"95vw"} />
      )}
    </>
  );
}
