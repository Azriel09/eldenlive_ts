import LoadingComponent from "../global/Loading";

import ReactPlayer from "react-player";
interface VideoPlayerProps {
  selectedStream: string;
  playerRef: React.RefObject<ReactPlayer>;
}

export default function VideoPlayer({
  selectedStream,
  playerRef,
}: VideoPlayerProps) {
  return (
    <>
      {!selectedStream ? (
        <LoadingComponent />
      ) : (
        <ReactPlayer
          ref={playerRef}
          playing
          controls
          url={selectedStream}
          width={"95vw"}
        />
      )}
    </>
  );
}
