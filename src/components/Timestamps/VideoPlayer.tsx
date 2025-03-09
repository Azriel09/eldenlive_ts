import LoadingComponent from "../global/Loading";
import TimestampsSlider from "./TimestampsSlider";
import styles from "./Timestamps.module.css";
import ReactPlayer from "react-player";
import { FilteredDataType } from "./TimestampsTypes";
interface VideoPlayerProps {
  selectedStream: string;
  playerRef: React.RefObject<ReactPlayer>;
  data: FilteredDataType | undefined;
}

export default function VideoPlayer({
  selectedStream,
  playerRef,
  data,
}: VideoPlayerProps) {
  return (
    <>
      {!selectedStream ? (
        <LoadingComponent />
      ) : (
        <div className={styles.player_timestamps_container}>
          <div className={styles.video_slider}>
            {" "}
            <ReactPlayer
              ref={playerRef}
              playing
              controls
              url={selectedStream}
              width="100%"
              height="100%"
            />
            <TimestampsSlider
              playerRef={playerRef}
              data={data}
              selectedStream={selectedStream}
            />
          </div>
        </div>
      )}
    </>
  );
}
