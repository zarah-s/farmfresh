import React from "react";
import NavBar from "../../../common/components/nav/NavBar";
import Intro from "./components/Intro";
import Brands from "./components/Brands";
import About from "./components/About";
import Footer from "../../../common/components/footer/Footer";
import Recipies from "./components/Recipies";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-[4.5rem] bg-primary">
        <Intro />
      </div>
      <Brands />
      <Recipies />
      <About />
      <Footer />
    </div>
  );
};

export default HomeScreen;
