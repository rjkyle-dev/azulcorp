/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Use environment variables for access key
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <section className="container mx-auto h-auto mt-20 px-4 relative">
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

          {/* Contact Form */}
          <div
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-out-in"
            className="flex justify-center lg:justify-end">
            <div className="flex flex-col justify-center items-center gap-5 mt-10 lg:mt-14 bg-indigo-300 py-10 w-full sm:w-[400px] rounded-2xl">
              <form onSubmit={onSubmit} className="w-[90%] flex flex-col gap-4">
                <input
                  type="hidden"
                  name="access_key"
                  value="70df15dd-26ba-4889-aab2-517ffb8e9598"></input>
                <input
                  type="hidden"
                  name="access_key"
                  value="8afeb3ab-6ae3-4a02-aa60-be5def115643"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="outline-none w-full h-[40px] text-[15px] rounded-md px-4"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="outline-none w-full h-[40px] text-[15px] rounded-md px-4"
                  required
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="6"
                  placeholder="Message"
                  className="outline-none w-full text-[15px] rounded-md px-4 py-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full h-[40px] bg-blue-600 text-white rounded-md font-bold font-sans transition ease-in-out delay-100 hover:bg-blue-500">
                  Submit
                </button>
              </form>
              <span className="text-sm text-gray-700 mt-2">{result}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
