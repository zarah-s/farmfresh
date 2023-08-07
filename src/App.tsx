import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/home/views/HomeScreen";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path={RoutesPath.about} element={<AboutScreen />} />
      </Routes>
    </div>
  );
};

export default App;
