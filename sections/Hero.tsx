import React from "react";

const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative w-50 h-50 rounded-full overflow-hidden border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/17.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="font-serif text-3xl md:text-6xl text-center mt-10 tracking-wide">
            Hi, I'm John Doe.
          </h1>
          <p className="mt-4 text-center text-black/60 md:text-lg">
            Welcome to my digital space! As a full-stack developer, I'm here to
            bring your ideas to life with seamless web solutions and
            cutting-edge technology.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-black bg-white/30 backdrop-blur-lg shadow-lg px-6 h-12 rounded-xl hover:bg-black hover:text-white">
            <span className="font-semibold">👋 Connect With Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
