import React from "react";
import Assets from "../../../../assets";

const OurStory = () => {
  return (
    <div className="m-20">
      <div className="grid grid-cols-2 items-center">
        <div className="flex items-center justify-center">
          <img src={Assets.OurStory} className="h-96" alt="" />
        </div>
        <div className="">
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
