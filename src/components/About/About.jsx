/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Selle from "../../assets/team-profile/JheANn.jpg";
import Kyle from "../../assets/team-profile/kyle.jpg";
import Concha from "../../assets/team-profile/Philip.jpeg";
import Nigas from "../../assets/team-profile/ÑIGAS,ENJE A ..jpg";
import Footer from "../../components/Footer/Footer";
import crab from "../../assets/image/crab.png";
import bubble from "../../assets/image/bubble.png";

const About = () => {
  return (
    <>
      <section
        id="features"
        className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-auto relative mb-56">
        {/* <div className="w-full flex justify-center absolute lg:top-[200px] top-36">
          <img src={crab} className="w-[30em] object-cover " alt="" />
        </div> */}

        {/* Intro Section */}
        <div className="flex mt-28">
          <div className="container pt-12 sm:pt-16 md:pt-20 lg:pt-24">
            <div data-aos="fade" className="text-center">
              <h1 className="text-blue-600 font-bold tracking-[0.12em] leading-tight text-3xl sm:text-6xl md:text-7xl lg:text-9xl lg:absolute lg:top-[-80px]">
                Who We Are
              </h1>
            </div>
            <div className="md:w-3/4 lg:w-[70%] mx-auto mt-4 lg:mt-12 lg:ml-[10px]">
              <p
                data-aos="zoom-in"
                className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-[0.02em] text-justify">
                At T.I.D.E.S, we are dedicated to making a positive impact on
                marine ecosystems through technology-driven insights and
                resources. Our platform combines innovation with a deep
                commitment to sustainability and conservation, offering tools
                and information that empower users to explore, protect, and
                understand our oceans. With T.I.D.E.S, you're choosing a partner
                that values sustainable practices and aims to foster a greater
                appreciation for marine biodiversity. Join us in making a
                difference for our planet's blue heart.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex justify-center absolute top-[200px] opacity-55">
          <img src={bubble} className="w-[30em] object-cover " alt="" />
        </div> */}

        {/* Team Section */}
        <div className="w-full mt-64 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              data-aos="fade-up"
              className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[310px] lg:h-[270px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <h1 className="text-2xl font-bold text-white mt-20 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg">
                  CEO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  Philip Roy C. Concha
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-5">
                  <ul className="w-[200px] ml-3">
                    <li className="text-wrap">Computer Literate-Leadership</li>
                    <li>Communications Skills</li>
                  </ul>
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8 border-white w-39 h-39 object-cover rounded-full border-[5px]">
                <img
                  src={Concha}
                  alt="Concha"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="relative w-full h-96 flex flex-col items-center lg:mt-0 mt-4 md:mt-0 sm:mt-0">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[325px] lg:h-[270px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <h1 className="text-2xl font-bold text-white mt-16 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg">
                  COO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  Enje A. Ñigas
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  <ul className="w-[200px] ml-3 -mt-2">
                    <li className="text-wrap">
                      Business and Management Skills
                    </li>
                    <li>System Analyst Accounting</li>
                  </ul>
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8  border-white w-39 h-39 object-cover rounded-full border-[5px]">
                <img
                  src={Nigas}
                  alt="Nigas"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="relative w-full h-96 flex flex-col items-center lg:mt-0 mt-4 md:mt-0 sm:mt-0">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[320px] lg:h-[270px]  rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <h1 className="text-2xl font-bold text-white mt-16 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg">
                  CMO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  Jhe-anne Y. Selle
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  <ul className="w-[200px] ml-3">
                    <li className="text-wrap">Communication Skills</li>
                    <li>Financial and Accounting Skills</li>
                  </ul>
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8 border-white w-39 h-39 object-cover rounded-full border-[5px]">
                <img
                  src={Selle}
                  alt="Selle"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="relative w-full h-96 flex flex-col items-center lg:mt-0 mt-4 md:mt-0 sm:mt-0">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[330px] lg:h-[270px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg px-5">
                <h1 className="text-2xl font-bold text-white mt-16 tracking-widest bg-sky-700 py-2 ml-10 w-[120px] rounded-lg">
                  CTO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  RJ Kyle G. Labrador
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  <ul className="w-[200px] ml-0">
                    <li className="text-wrap">Design and Creative Skills</li>
                    <li>Technical/Programming Skills</li>
                  </ul>
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8 border-white w-39 h-39 object-cover rounded-full border-[5px]">
                <img
                  src={Kyle}
                  alt="Kyle"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
