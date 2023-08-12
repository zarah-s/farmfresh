import React from "react";
import NavBar from "../../../common/components/nav/NavBar";
import Footer from "../../../common/components/footer/Footer";
import Assets from "../../../assets";
import Popup from "reactjs-popup";
import ReactPlayer from "react-player";

const Recipies = () => {
  return (
    <div>
      <NavBar activeTab="Recipies" />
      <div className="mt-20 relative">
        <img
          src={Assets.RecipiesBg}
          className="w-full h-[100vh] object-cover"
          alt=""
        />

        <div className="absolute top-12 w-full h-full">
          <div className="mx-32">
            <h1 className="text-5xl mb-5 font-[400] text-primary text-center">
              Recipes for Farmfresh lovers
            </h1>
            <div className="bg-white shadow-xl rounded-xl p-10 gap-10 grid grid-cols-12">
              <div className="col-span-5">
                <iframe
                  src="https://drive.google.com/file/d/1Nd47PO2wgJfNWU-b4kTPzzbnwxWFZ0KR/preview"
                  className="w-full  h-96 rounded-xl"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="col-span-7">
                <div className="flex items-center gap-10 justify-between">
                  <div className="">
                    <h1 className="text-primary font-[400] text-4xl">
                      Creamy milk tea
                    </h1>
                    <p className="text-[#1F1F1F] mt-2 text-sm">
                      Do you have a few questions? Below are some of our
                      frequently asked questions.If you are still unsure if
                      Farmfresh is right for you can contact us here
                    </p>
                  </div>
                  <div className="">
                    <img src={Assets.Chef} alt="" />
                    <p className="text-[#4E94A2] text-xs">Cook time</p>
                    <p className="text-xl text-primary">15</p>
                  </div>
                </div>
                <ul className="my-5">
                  <li className=" list-disc my-5 text-[#1F1F1F] text-xs">
                    1 teaspoon Farmfresh Unsweetened yoghurt or 200g Farmfresh
                    Natural Stirred Yoghurt
                  </li>
                  <li className=" list-disc my-5 text-[#1F1F1F] text-xs">
                    1 teaspoon Farmfresh Unsweetened yoghurt or 200g Farmfresh
                    Natural Stirred Yoghurt
                  </li>
                  <li className=" list-disc my-5 text-[#1F1F1F] text-xs">
                    1 teaspoon Farmfresh Unsweetened yoghurt or 200g Farmfresh
                    Natural Stirred Yoghurt
                  </li>
                  <li className=" list-disc my-5 text-[#1F1F1F] text-xs">
                    1 teaspoon Farmfresh Unsweetened yoghurt or 200g Farmfresh
                    Natural Stirred Yoghurt
                  </li>
                  <li className=" list-disc my-5 text-[#1F1F1F] text-xs">
                    1 teaspoon Farmfresh Unsweetened yoghurt or 200g Farmfresh
                    Natural Stirred Yoghurt
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipies;
