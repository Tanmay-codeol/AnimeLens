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


const App = () => {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <VideoContext.Provider value={{ videoUrl, setVideoUrl }}>
        <Hero />
        <Benefits />




        {/* <Collaboration /> */}
        {/*for the next page */}
        <Services  />  
        </VideoContext.Provider>
        <Pricing />
        {/* <Roadmap /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
