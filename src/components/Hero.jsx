import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import VideoPlayer from './VideoPlayer';
import { useContext } from "react";
import VideoContext from "./design/videoContext";
import { useNavigate } from "react-router-dom";





let Responsee = {
  
};

function cleanAnimeName(animeName) {
  return animeName.replace(/(\[.*?\]|\(.*?\))/g, '').replace(/\.mp4/g, '').trim();

}


const Hero = () => {
  const parallaxRef = useRef(null);

  
  const navigate = useNavigate();
  const { setVideoUrl } = useContext(VideoContext);
  const { setAnimeName, setTimeStamp, setEpisode, setAniList } = useContext(VideoContext);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
  
    const response = await fetch('https://api.trace.moe/search', {
      method: 'POST',
      body: formData,
    });
  
    const data = await response.json();
    Responsee = data;
    console.log(data);
    let videoUrl = Responsee.result[0].video;
    let AnimeName0 = Responsee.result[0].filename;
    let TimeStamp0 = Responsee.result[0].from;
    let Episode0 = Responsee.result[0].episode;
    let AniList0 = Responsee.result[0].anilist;

    console.log(AniList0, Episode0, TimeStamp0, AnimeName0, videoUrl);
    setVideoUrl(videoUrl);
    setAnimeName(cleanAnimeName(AnimeName0));
    setTimeStamp(TimeStamp0);
    setEpisode(Episode0);
    setAniList(AniList0);
    navigate("/services");

  
    // let container = document.getElementById('videoplayer');
    // let video = document.createElement('video');
    // video.src = videoUrl;
    
    // video.loop = true;
    // container.appendChild(video);
    // video.play();
  
  
  };
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
      >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Upload a Snap &nbsp;and&nbsp;Find the Anime using{`  `}
            <span className="inline-block relative">
               AnimeLens{" "}
               
                     
                    
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AnimeLens, Find your Anime with episode number
          </p>

          <Button href="https://www.patreon.com/user/membership?u=100692168" white >
            Gimme money i am broke!!
          </Button>
          
          <br />
          <br />
          {/* <Button href="/search" white >
            Search Anime
          </Button> */}
          <Button >
            
          <label htmlFor="fileInput" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700">
              <span>Upload Image</span>
              <input id="fileInput" type="file" className="hidden" accept=".png, .jpg, .jpeg" onChange={handleFileChange}/>
          </label>

          </Button>

        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div id ="videoplayer" className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Your anime is ..."
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
