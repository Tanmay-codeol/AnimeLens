import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoUrl && videoRef.current) {
      videoRef.current.src = videoUrl;
      videoRef.current.play();
    }
  }, [videoUrl]);

  return (
    <video ref={videoRef} loop style={{ width: '100%', height: '100%' }} />
  );
};

export default VideoPlayer;