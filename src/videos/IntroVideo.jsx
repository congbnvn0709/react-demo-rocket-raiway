import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useMemo,
} from "react";
import video from "./introvideo.mp4";
const IntroVideo = (props, ref) => {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return useMemo(() => {
    console.log("video render");
    return (
      <>
        <video ref={videoRef} src={video} width={280}></video>
      </>
    );
  }, []);
};

export default forwardRef(IntroVideo);
