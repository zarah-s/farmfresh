import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";
import Assets from "../../../../assets";

const Carousel = () => {
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
    <div className="">
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 1,
          pagination: false,
          gap: "20px",
        }}
        aria-label=""
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => {
          return (
            <SplideSlide key={item} className="mx-3">
              <img
                src={Assets.Brand3}
                className="w-full h-[90vh] object-cover"
                alt=""
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Carousel;
