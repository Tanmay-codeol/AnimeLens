import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { useRef, useState } from "react";
import VideoContext from "./components/design/videoContext";
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <VideoContext.Provider value={{ videoUrl, setVideoUrl }}>
          <Routes>
            <Route path="/" element={<><Hero /><Benefits /><Pricing /><Footer /></>} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </VideoContext.Provider>
      <ButtonGradient />
      </div>
    </>
    
  );
};

export default App;
