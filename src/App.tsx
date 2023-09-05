import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/home/views/HomeScreen";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";
import FaqScreen from "./pages/faq/views/FaqScreen";
import Recipies from "./pages/recipies/views/Recipies";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Assets from "./assets";

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  duration: number;
  ingredients: string[];
  videoUrl: string;
  category: string;
  steps: string;
}
const App = () => {
  const [recipies, setRecipies] = useState<Recipe[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const fetchRecipies = async () => {
    try {
      const response = await axios.get(
        "https://farmfresh-api.vercel.app/api/recipes/category?category=farmfresh"
      );
      console.log(response.data.data);
      setRecipies(response.data.data);
    } catch (error) {
      toast.error("Network error");
    }
  };

  useEffect(() => {
    fetchRecipies();
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Routes>
        <Route index element={<HomeScreen recipes={recipies} />} />
        <Route path={RoutesPath.about} element={<AboutScreen />} />
        <Route path={RoutesPath.faq} element={<FaqScreen />} />
        <Route path={RoutesPath.recipies} element={<Recipies />} />
      </Routes>
      {isVisible ? (
        <div className="fixed bottom-10 right-5">
          <button
            onClick={scrollToTop}
            className="shadow-2xl rotate-180 p-3 bg-white rounded-full"
          >
            <Assets.Dropdown height={20} width={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
