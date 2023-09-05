import { useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Assets from "../../../../assets";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../../../constants/Routes";
import { Recipe } from "../../../../App";
import ReactPlayer from "react-player";
interface Props {
  recipes: Recipe[];
}
const Recipies = ({ recipes }: Props) => {
  const splideRef = useRef<Splide | null>(null); // Add TypeScript type annotation
  const navigate = useNavigate();
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

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      const interval = setInterval(() => {
        splideInstance?.go("+1");
      }, 4000); // Adjust the interval (in milliseconds) as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, []);
  return (
    <div id="recipies" className="m-20">
      <h1 className="text-2xl text-primary text-center font-semibold">
        Recipies
      </h1>
      <p className="text-center">Get the latest news about our products</p>
      <div className="my-10"></div>
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: screenWidth >= 576 ? 5 : 2,
          pagination: false,
          gap: "20px",
        }}
        aria-label=""
      >
        {recipes.map((item, index) => {
          return (
            <SplideSlide key={item._id} className="mx-3">
              <div className="card h-64">
                {/* <video
                  src={item.videoUrl}
                  className="rounded-xl w-full h-64 object-cover"
                ></video> */}
                <ReactPlayer
                  url={item.videoUrl}
                  style={{
                    height: "100%",
                    borderRadius: "0.75rem",
                    width: "100%",
                  }}
                />
                {/* <img
                  src={Assets.Brand1}
                  className="rounded-xl w-full h-64 object-cover"
                  alt=""
                /> */}
                <div className="content">
                  <p className="text-sm">{item.description}</p>
                  <button
                    onClick={() => {
                      navigate(RoutesPath.recipies, { state: item });
                    }}
                    className="bg-white shadow-lg text-primary w-full rounded-lg p-2 text-sm mt-3"
                  >
                    View
                  </button>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Recipies;
