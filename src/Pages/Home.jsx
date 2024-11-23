
import React from "react";
import NatureVid from "../assets/video/ocean.mp4";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="h-[700px] relative overflow-visible">
          <video
            data-aos="fade"
            data-aos-duration="1000"
            autoPlay
            loop
            muted
            className="h-full absolute right-0 top-0 w-full aspect-video object-cover z-[-1]">
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;

