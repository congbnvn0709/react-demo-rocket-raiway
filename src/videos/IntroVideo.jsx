import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import video from "./introvideo.mp4";
const IntroVideo = (props, ref) => {
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef.current);
  });
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return (
    <>
      <video ref={videoRef} src={video} width={280}></video>
    </>
  );
};

export default forwardRef(IntroVideo);
