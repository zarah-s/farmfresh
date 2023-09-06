import NavBar from "../../../common/components/nav/NavBar";
import Footer from "../../../common/components/footer/Footer";
import Assets from "../../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Recipe } from "../../../App";
import ReactPlayer from "react-player";

const Recipies = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const state = location.state;
    if (!state) {
      navigate(-1);
    } else {
      setRecipe(state);
    }
  }, []);

  return (
    <div>
      <NavBar activeTab="Recipies" />

      <div className="mt-20 recipe-bg py-20">
        <div className=" ">
          <div className="xl:mx-32 lg:mx-32 md:mx-32 sm:mx-3 xs:mx-3">
            <h1 className="text-5xl mb-5 font-[400] text-primary text-center">
              Recipes for Farmfresh lovers
            </h1>
            <div className="bg-white w-full  shadow-xl rounded-xl xl:p-10 lg:p-10 md:p-10 sm:p-5 xs:p-5 xl:space-x-10 lg:space-x-10 md:space-x-10 sm:space-x-0 xs:space-x-0 xl:space-y-0 lf:space-y-0 md:space-y-0 sm:space-y-20 xs:space-y-20  grid grid-cols-12">
              <div className="xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-12 xs:col-span-12">
                <div className="w-full xl:h-96 lg:h-96 flex md:h-64 sm:h-72 xs:h-72 rounded-lg">
                  <ReactPlayer
                    url={recipe?.videoUrl}
                    style={{
                      width: "100%",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
                {/* <iframe
                  src="https://drive.google.com/file/d/1Nd47PO2wgJfNWU-b4kTPzzbnwxWFZ0KR/preview"
                  className="w-full xl:h-96 lg:h-96 md:h-64 sm:h-72 xs:h-72 rounded-lg"
                  allow="autoplay"
                ></iframe> */}
              </div>
              <div className="xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-12 xs:col-span-12">
                <div className="flex flex-wrap items-center gap-10 justify-between">
                  <div className="">
                    <h1 className="text-primary font-[400] text-4xl">
                      {recipe?.title}
                    </h1>
                    <p className="text-[#1F1F1F] mt-2 text-sm">
                      {recipe?.description}
                    </p>
                  </div>
                  <div className="">
                    <img src={Assets.Chef} alt="" />
                    <p className="text-[#4E94A2] text-xs">Cook time</p>
                    <p className="text-xl text-primary">{recipe?.duration}</p>
                  </div>
                </div>
                <ul className="my-5">
                  {recipe?.ingredients.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" list-disc my-5 text-[#1F1F1F] text-xs"
                      >
                        {item}
                      </li>
                    );
                  })}
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
