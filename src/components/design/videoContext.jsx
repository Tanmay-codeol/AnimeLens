import { createContext } from 'react';

const VideoContext = createContext({
  videoUrl: '',
  setVideoUrl: () => {},
  AnimeName0: '',
  setAnimeName: () => {},
  TimeStamp0: 0.0,
  setTimeStamp: () => {},
  Episode0: 0,
  setEpisode: () => {},
  AniList0: 0,
  setAniList: () => {},

});

export default VideoContext;