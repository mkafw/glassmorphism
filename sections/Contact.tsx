import React from "react";

const Contact = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{}}></div>
          <div className="flex flex-col gap-8 md:gap-16 items-center">
            <div className="text-center">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's connect!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Here’s how you can reach out or find me on social media to chat
                about opportunities or collaborations.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
              </button>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
              </button>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
              </button>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
