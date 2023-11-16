import React, { useEffect, useState } from "react";
import Assets from "../../../../assets";

const OurStory = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleScreenWidthChange = () => {
    setScreenWidth(window.innerWidth);
    // Perform any actions or updates based on the screen width change
  };

  useEffect(() => {
    // Event listener for screen resize
    window.addEventListener("resize", handleScreenWidthChange);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("resize", handleScreenWidthChange);
    };
  }, []);
  return (
    <div className=" m-20">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center">
        {screenWidth >= 576 ? (
          <div className="flex items-center justify-center">
            <video
              src="/story.mp4"
              className="h-96 rounded-lg"
              controls
              autoPlay
              muted
              loop
            ></video>
            {/* <img src={Assets.OurStory} className="h-96" alt="" /> */}
          </div>
        ) : null}
        <div className="xl:px-0 lg:px-0 md:px-0 sm:px-3 xs:px-3 space-y-4">
          <h1 className="text-[#398796] font-[400] text-4xl">Our Story</h1>
          <p className="text-[#398796]">
            Susan was the first holstein cow brought from Fries-land to the farm
            for dairy processes, where she adapted quickly in Vom, Plateau
            state. She produced alot of Milk and remains the mother of all our
            cows. This Milk was produced into tasty nutritional dairy product,
            know as Farmfresh which started in 2003. First pack change happened
            in 2009 - 2010 from the square bottles to the round bottles for the
            drinking yoghurt. The new packaging was launched in 2016, and few
            new flavors were added as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
