import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/home/views/HomeScreen";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";
import FaqScreen from "./pages/faq/views/FaqScreen";
import Recipies from "./pages/recipies/views/Recipies";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

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
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<HomeScreen recipes={recipies} />} />
        <Route path={RoutesPath.about} element={<AboutScreen />} />
        <Route path={RoutesPath.faq} element={<FaqScreen />} />
        <Route path={RoutesPath.recipies} element={<Recipies />} />
      </Routes>
    </div>
  );
};

export default App;
