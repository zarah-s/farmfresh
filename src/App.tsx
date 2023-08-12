import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/home/views/HomeScreen";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";
import FaqScreen from "./pages/faq/views/FaqScreen";
import Recipies from "./pages/recipies/views/Recipies";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path={RoutesPath.about} element={<AboutScreen />} />
        <Route path={RoutesPath.faq} element={<FaqScreen />} />
        <Route path={RoutesPath.recipies} element={<Recipies />} />
      </Routes>
    </div>
  );
};

export default App;
