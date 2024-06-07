import React, { useRef } from 'react';
import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (video) {
      if (!document.fullscreenElement) {
        video.requestFullscreen().then(() => {
          video.play();
        }).catch((err) => {
          console.error('Error attempting to enable full-screen mode:', err.message);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Birdi brings the wild to  
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          your fingertips.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Welcome to Birdi, your gateway to the mesmerizing world of avian melodies. Immerse yourself in the enchanting calls of birds from around the globe with just a tap. Our intuitive interface allows you to effortlessly explore and learn about diverse bird species, while each sound brings you closer to the heart of nature. Whether you're a seasoned birder or a curious novice, Birdi is your companion in discovering the beauty and significance of birds in our ecosystems. Join us in our mission to inspire conservation and appreciation for the natural world. Start your journey today with Birdi.
      </p>
      <div className="flex justify-center my-10">
      <a href="https://rohitmenonhart-xhunter.github.io/BIRDIE-V1-SVCE.github.io/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
  Visit website
      </a>

      </div>
      <div className="flex mt-10 justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          controls
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          onClick={toggleFullScreen}
        >
          <source src={video1} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
