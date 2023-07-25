import { motion } from "framer-motion";
import Assets from "../../../../assets";
const Intro = () => {
  return (
    <div className="container mx-auto px-20">
      <div className="flex items-center flex-col justify-center">
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
            delay: 1,
            duration: 0.5,
          }}
          src={Assets.SpecialOffers}
          className="w-64 h-64 object-contain"
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
            width={1180}
            height={600}
            src={Assets.DeliveryVan}
            className="w-[40rem] h-80"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
