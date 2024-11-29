
import React from "react";
import NatureVid from "../assets/video/ocean.mp4";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="h-[740px] relative overflow-visible sm:h-[800px] md:h-[740px] lg:h-[650px] xl:h-[700px]">
          <video
            data-aos="fade-in"
            data-aos-duration="2000"
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

