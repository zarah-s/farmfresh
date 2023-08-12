import Footer from "../../../common/components/footer/Footer";
import NavBar from "../../../common/components/nav/NavBar";
import FAQS from "./components/FAQS";
import Intro from "./components/Intro";
const FaqScreen = () => {
  return (
    <div>
      <NavBar activeTab="FAQ" />

      <Intro />
      <FAQS />
      <Footer />
    </div>
  );
};

export default FaqScreen;
