import { useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Assets from "../../../../assets";
const Recipies = () => {
  const splideRef = useRef<Splide | null>(null); // Add TypeScript type annotation

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      const interval = setInterval(() => {
        splideInstance?.go("+1");
      }, 2000); // Adjust the interval (in milliseconds) as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, []);
  return (
    <div className="mt-20">
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
          perPage: 5,
          pagination: false,
          gap: "20px",
        }}
        aria-label=""
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => {
          return (
            <SplideSlide key={item} className="mx-3">
              <div className="card">
                <img
                  src={Assets.Brand1}
                  className="rounded-xl w-full h-64 object-cover"
                  alt=""
                />
                <div className="content">
                  <p className="text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <button className="bg-white shadow-lg text-primary w-full rounded-lg p-2 text-sm mt-3">
                    Click
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
