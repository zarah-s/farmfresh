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
import { Recipe } from "../../../App";
interface Props {
  recipes: Recipe[];
}
const HomeScreen = ({ recipes }: Props) => {
  const location = useLocation();
  const brands: Recipe[] = [
    {
      _id: Math.floor(Math.random() * 99999).toString(),
      category: "farmfresh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
      duration: 676,
      ingredients: [],
      steps: "",
      title: "Natural",
      videoUrl: "",
    },

    {
      _id: Math.floor(Math.random() * 99999).toString(),
      category: "farmfresh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
      duration: 676,
      ingredients: [],
      steps: "",
      title: "Strawberry",
      videoUrl: "",
    },
    {
      _id: Math.floor(Math.random() * 99999).toString(),
      category: "farmfresh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
      duration: 676,
      ingredients: [],
      steps: "",
      title: "Pineapple",
      videoUrl: "",
    },
    {
      _id: Math.floor(Math.random() * 99999).toString(),
      category: "farmfresh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and... Read more",
      duration: 676,
      ingredients: [],
      steps: "",
      title: "Natural",
      videoUrl: "",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
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
        onTap={(index: number) => {
          setCurrentIndex(index);
        }}
        currentIndex={currentIndex}
        onClose={() => setOpenModal(false)}
        content={brands[currentIndex].description}
        images={[Assets.Brand1, Assets.Brand2, Assets.Brand3]}
        title={brands[currentIndex].title}
        open={openModal}
      />
      <Brands
        onTap={() => {
          setOpenModal(true);
        }}
      />
      <Recipies recipes={recipes} />;
      <About />
      <Footer />
    </div>
  );
};

export default HomeScreen;
