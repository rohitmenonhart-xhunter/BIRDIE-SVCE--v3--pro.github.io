import video1 from "../assets/video1.mp4"

const HeroSection = () => {
  return (
  <div className="flex flex-col items-center mt-6 lg:mt-20">
    <hi className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    Birdi brings the wild to  
    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
    {" "}
    your fingertips.
    </span>
    </hi>
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    Welcome to Birdi, your gateway to the mesmerizing world of avian melodies. Immerse yourself in the enchanting calls of birds from around the globe with just a tap. Our intuitive interface allows you to effortlessly explore and learn about diverse bird species, while each sound brings you closer to the heart of nature. Whether you're a seasoned birder or a curious novice, Birdi is your companion in discovering the beauty and significance of birds in our ecosystems. Join us in our mission to inspire conservation and appreciation for the natural world. Start your journey today with Birdi.
    </p>
    <div className="flex justfy-center my-10">
        <a href="https://birdisvce.vercel.app/" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
         visit website
        </a>
    </div>
    <div className="flex mt-10 justify-center">
        <video 
        autoPlay
        loop
        muted
        className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
             <source src={video1} type="video/mp4" />
             Your doesnt support the video tag.
        </video>
    </div>
  </div> 
)
}

export default HeroSection