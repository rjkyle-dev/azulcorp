/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../../components/Footer/Footer";
import fish from "../../assets/image/fish.png";

const Contact = () => {
  return (
    <>
      <section className="container mx-auto h-auto mt-20 px-4 relative">
        {/* <div className="w-full flex justify-center absolute lg:top-[30px] top-[90px]">
          <img src={fish} className="w-[30em] object-cover " alt="" />
        </div> */}

     
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 mt-8 lg:mt-24">
            <div
              data-aos="slide-right"
              data-aos-ease="ease-in-out"
              data-aos-duration="1000"
              className="font-bold">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-blue-500">
                Let's Talk
              </h1>
            </div>
            <div
              data-aos="fade"
              data-aos-ease="ease-in-out"
              data-aos-duration="1000">
              <p className="text-sm sm:text-base lg:text-lg font-sans font-normal mt-4 text-justify">
                For any inquiries or collaboration opportunities, feel free to
                reach out to Azul Corporation. We're here to discuss how we can
                work together in shaping a sustainable future for our oceans.
                Contact us today and join the movement toward preserving marine
                life with innovative technology!
              </p>
            </div>
          </div>

          <div
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            // data-aos-once="true"
            data-aos-easing="ease-out-in"
            className="flex justify-center lg:justify-end">
            <div className="flex flex-col justify-center items-center gap-5 mt-10 lg:mt-10 bg-indigo-300 py-10 w-full sm:w-[400px] rounded-2xl">
              <div className="w-[90%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-none w-full h-[40px] text-[15px] rounded-md px-4"
                />
              </div>
              <div className="w-[90%]">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none w-full h-[40px] text-[15px] rounded-md px-4"
                />
              </div>
              <div className="w-[90%]">
                <textarea
                  cols="30"
                  rows="6"
                  placeholder="Message"
                  className="outline-none w-full text-[15px] rounded-md px-4 py-2"
                />
              </div>
              <div className="w-[90%] text-center">
                <button className="w-full h-[40px] bg-blue-600 text-white rounded-md font-bold font-sans transition ease-in-out delay-100 hover:bg-blue-500">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Section */}
      </section>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
