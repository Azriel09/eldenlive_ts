import LoadingComponent from "../global/Loading";
import ReactPlayer from "react-player";
interface VideoPlayerProps {
  selectedStream: string;
}
const YT_API = import.meta.env.VITE_YOUTUBE_API_KEY;
export default function VideoPlayer({ selectedStream }: VideoPlayerProps) {
  return (
    <>
      {!selectedStream ? (
        <LoadingComponent />
      ) : (
        <ReactPlayer url={selectedStream} />
      )}
    </>
  );
}
