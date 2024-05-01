const FeatureSection = () => {
    return (
      <>
      <div className="text-center mt-10">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-8 text-2xl font-medium px-2 py-1 mt-10">
             live demo - to experience the birdi completely please click on the VISIT SITE above.
        </span>
      </div>
      
      <div className="flex justify-center items-center h-screen border-orange-400 rounded-md">
        <iframe
          src="https://rohitmenonhart-xhunter.github.io/BIRDIE-SVCE.github.io/"
          title="Example Website"
          style={{ width: '80%', height: '70vh', border: 'none rounded' }}   
          >

          </iframe>

          
          
      </div>

      <div className="text-center mb-10">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-8 text-2xl font-medium px-2 py-1 mt-5 my-10">
             Bird Book - SVCE.
        </span>
      </div>

      

      </>

      
    );
  }
  
  export default FeatureSection;