import NavBar from "../../../common/components/nav/NavBar";
import Footer from "../../../common/components/footer/Footer";
import Carousel from "./components/Carousel";
import CatchPhrase from "./components/CatchPhrase";
import OurStory from "./components/OurStory";
import OurProducts from "./components/OurProducts";
import Banner from "./components/Banner";
import Company from "./components/Company";
import GridItems from "./components/GridItems";

const AboutScreen = () => {
  return (
    <div>
      <NavBar activeTab="About" />

      <Carousel />
      <CatchPhrase />

      <OurStory />

      <OurProducts />

      <Banner />

      <Company />

      <GridItems />

      <Footer />
    </div>
  );
};

export default AboutScreen;
