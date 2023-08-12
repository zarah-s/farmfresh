import NavBar from "../../../common/components/nav/NavBar";
import Intro from "./components/Intro";
import Brands from "./components/Brands";
import About from "./components/About";
import Footer from "../../../common/components/footer/Footer";
import Recipies from "./components/Recipies";
import BrandPopUp from "./components/BrandPopUp";
import { useEffect, useState } from "react";
import Assets from "../../../assets";
import { useLocation } from "react-router-dom";

const HomeScreen = () => {
  const location = useLocation();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const scrollToHash = (hash: string) => {
    const blogElement = document.getElementById(
      hash.split("").slice(1).join("")
    );
    if (blogElement) {
      window.scrollTo({
        behavior: "smooth",
        top: blogElement.offsetTop,
      });
    }
  };
  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);
  return (
    <div>
      <NavBar activeTab="Home" />
      <div className="mt-[4.5rem] bg-primary">
        <Intro />
      </div>
      <BrandPopUp
        onClose={() => setOpenModal(false)}
        content=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and... Read more"
        images={[Assets.Brand1, Assets.Brand2, Assets.Brand3]}
        title="Farmfresh full cream milk"
        open={openModal}
      />
      <Brands
        onTap={() => {
          setOpenModal(true);
        }}
      />
      <Recipies />
      <About />
      <Footer />
    </div>
  );
};

export default HomeScreen;
