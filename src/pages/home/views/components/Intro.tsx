import { motion } from "framer-motion";
import Assets from "../../../../assets";
import { useEffect, useState } from "react";
const Intro = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the number every 5 seconds
      setNumber((prevNumber) => prevNumber + 1);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the interval on unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container mx-auto overflow-hidden relative">
      {number % 2 !== 0 ? (
        <div className="md:h-[80vh] h-[50vh]">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="flex flex-col items-center mt-10 justify-center  w-full"
          >
            <img src={Assets.Yo_intro4} alt="" className="md:w-1/5 w-1/2" />
            <img src={Assets.Yo_intro5} alt="" className="md:w-1/5 w-1/2" />
          </motion.div>
          <div className="absolute top-10 w-full flex items-center justify-center ">
            <div className="z-50">
              <motion.img
                initial={{
                  translateY: -100,
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
                src={Assets.Berries}
                alt=""
              />
            </div>
          </div>
          <motion.div
            initial={{
              translateY: 500,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex absolute  -bottom-20 items-center justify-center"
          >
            <img
              src={Assets.Yo_intro3}
              alt=""
              className="md:w-80 w-44 md:h-80 h-52"
            />
            <img
              src={Assets.Yo_intro1}
              alt=""
              className="md:w-80 w-44 md:h-80 h-52"
            />
            <img
              src={Assets.Yo_intro}
              alt=""
              className="md:w-80 w-44 md:h-80 h-52"
            />
            <img
              src={Assets.Yo_intro2}
              alt=""
              className="md:w-80 w-44 md:h-80 h-52"
            />
          </motion.div>
        </div>
      ) : (
        <div className="flex items-center flex-col justify-center md:h-[80vh] h-[50vh]">
          <motion.img
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            src={Assets.SpecialOffers}
            className="md:w-1/5 w-1/2 h-64 object-contain"
            alt=""
          />
          <motion.div
            initial={{
              translateX: 1000,
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex items-center justify-center"
          >
            <img
              src={Assets.DeliveryVan}
              className="w-full md:h-[40vh] h-[25vh]"
              alt=""
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Intro;
