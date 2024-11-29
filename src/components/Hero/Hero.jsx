/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "../Carousel/Carousel";
import BentoGridDemo from "../ui/Bento/Bento-grid-components";




const Hero = () => {
  
 
  return (
    <>
      <div className="relative h-screen">
        <section
          id="home"
          className="h-[120%] w-full overflow-hidden mt-[4em] sm:h-[150%] ">
          <div className=" h-[100%] relative mt-[60px] w-full md:h-[655px] sm:h-[800px] lg:h-[255px] xl:h-[100%] ">
            <div className="w-full mt-[-50px] flex flex-col md:flex-row justify-center items-center gap-36 ">
              <div className="container grid grid-cols-1 gap-4 mb-20 sm:mb-32 sm:top-[-5em] md:mb-44 sm:mt-20 relative">
                <div className="w-full xl:absolute xl:top-[-50px] xl:left-[8rem] lg:left-5 mt-[50px] sm:mt-0 md:mt-[210px] lg:mt-[90px] ">
                  <div className="text-white px-4 sm:px-10 md:px-12 lg:px-10 xl:px-24 xl:mt-[-220px] md:top-[-12em] relative xl:left-[-100px] xl:top-[20em] lg:left-[-6em] xl:w-[100%] right-14 top-[1.5em] lg:top-[-2em]">
                    <h1
                      data-aos="fade"
                      className="mainText text-blue-700 text-7xl sm:text-9xl lg:text-9xl xl:text-9xl font-extrabold xl:tracking-[0.40em] tracking-widest sm:text-sky-700 md:text-[10em] md:ml-[145px] xl:ml-20 ml-[1.2em] lg:ml-[70px]">
                      TIDES
                    </h1>

                    <p className="font-bold text-sm sm:text-xl xl:text-2xl text-white font-serif mt-4 sm:mt-6 xl:ml-[-16em] xl:w-[120%] md:w-[600px] md:text-center lg:ml-[-40px] w-[400px] ml-[5em] sm:ml-[8.3em] md:ml-[4em]">
                      <q
                        className="tracking-widest ml-[-5px]"
                        data-aos="fade"
                        // data-aos-delay="200"
                        data-aos-easing="linear">
                        Explore Discover Conserve
                      </q>
                    </p>

                    <p
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-easing="linear"
                      className="w-[280px] ml-[5em] leading-relaxed mt-4 sm:mt-6 xl:w-[500px] tracking-wide font-sans text-sm sm:text-lg xl:text-xl xl:ml-[60px] md:w-[550px] text-justify lg:w-[360px] xl:mt-[1em] sm:w-[400px] sm:ml-28">
                      Technology for Intelligent Detection of Ecosystem Species
                      is a cutting-edge system that uses advanced technology to
                      track and identify marine species in their natural
                      ecosystem. Empowering conservation efforts, TIDES supports
                      sustainable ocean management and fosters a deeper
                      understanding of marine biodiversity. Dive into a better
                      future with TIDES!
                    </p>

                    <div
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-easing="linear"
                      className="pt-5 sm:mt-2 md:mt-[-1%] xl:ml-[60px] m-auto ml-[4em] lg:ml-[95px] sm:ml-28">
                      <button
                        type="button"
                        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg px-6 py-2 text-sm sm:text-base shadow-md md:px-[80px] md:mt-5 md:w-[250px] md:py-3 md:ml-[2px]">
                        Explore More
                      </button>
                    </div>
                  </div>
                  <div className=" h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] absolute sm:top-[140%] md:top-[130%]">
                    <div className="relative w-full sm:w-3/4 md:w-[450px] lg:w-[450px] xl:w-[70%] xl:top-[-18em] xl:left-[40em] mx-auto md:top-[-22em] md:left-[9em] lg:top-[-125%] lg:left-[35em] z-[10] top-[3em] left-[-2em] sm:top-[-5em] xl:mt-[3em] lg:mt-0 md:mt-0 sm:mt-0">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-once="true"
                        data-aos-easing="linear"
                        className="flex justify-center items-center sm:mt-[-30px] md:mt-[-20px] xl:mt-8">
                        <Carousel className="h-[200px] sm:h-[250px]  lg:h-[400px] md:w-[400px] xl:w-[620px] w-[200px] ml-16 xl:ml-2 rounded-[10px] xl:h-[550px] xl:mt-7 lg:mt-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="w-full relative top-[1.5em] xl:top-[15em] sm:top-[20em]">
        <BentoGridDemo />
        <Footer />
      </div>
    </>
  );
};

export default Hero;



