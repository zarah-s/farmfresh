import { Splide, SplideSlide } from "@splidejs/react-splide";
import Popup from "reactjs-popup";
import Assets from "../../../../assets";
import { useEffect, useRef } from "react";
interface Props {
  open: boolean;
  images: any[];
  title: string;
  titles: string[];
  content: string;
  ingredients: string[];
  onClose: VoidFunction;
  currentIndex: number;
  onTap: Function;
}
const BrandPopUp = ({
  content,
  images,
  open,
  title,
  onClose,
  currentIndex,
  onTap,
  ingredients,
  titles,
}: Props) => {
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
  }, [currentIndex]);
  return (
    <Popup
      lockScroll
      overlayStyle={{
        background: "rgba(0,0,0,.3)",
      }}
      closeOnDocumentClick
      closeOnEscape
      open={open}
      onClose={onClose}
    >
      <div className="bg-white min-h-[70vh] relative shadow-lg mx-20 rounded-xl p-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                drag: "free",
                focus: "center",
                perPage: 1,
                gap: "20px",
              }}
              aria-label=""
            >
              {images.map((item: any, index: number) => {
                return (
                  <SplideSlide key={index} className="mx-3">
                    <img
                      src={item}
                      className="w-full h-96 object-cover rounded-lg"
                      alt=""
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
          <div className="col-span-8">
            <div className="bg-[#39889769] p-3 rounded-xl">
              <div className="flex items-center justify-around">
                {titles.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        onTap(index);
                      }}
                      className={
                        currentIndex === index
                          ? "text-white font-[500] border-b-2 border-b-white"
                          : "text-[#398796]"
                      }
                    >
                      {item}
                    </button>
                  );
                })}

                {/* <button
                  onClick={() => {
                    onTap(1);
                  }}
                  className={
                    currentIndex === 1
                      ? "text-white font-[500] border-b-2 border-b-white"
                      : "text-[#398796]"
                  }
                >
                  Strawberry
                </button>
                <button
                  onClick={() => {
                    onTap(2);
                  }}
                  className={
                    currentIndex === 2
                      ? "text-white font-[500] border-b-2 border-b-white"
                      : "text-[#398796]"
                  }
                >
                  Pineapple
                </button> */}
              </div>
            </div>
            <div className="my-10 mx-10">
              <h1 className="text-[#398796] font-[400] text-3xl">{title}</h1>
              <p className="text-[#398796] mt-5">{content}</p>
              <div className="my-10"></div>
              <h1 className="text-[#398796] font-[400] text-3xl">
                Ingredients
              </h1>
              <p className="text-[#398796] mt-5">{ingredients[0]}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10">
          <a
            href="https://farmfreshng.com/"
            target="_blank"
            className="bg-primary px-5 py-2 rounded-lg text-white"
          >
            shop now
          </a>
        </div>
      </div>
    </Popup>
  );
};

export default BrandPopUp;
