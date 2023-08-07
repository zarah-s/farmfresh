import { Link } from "react-router-dom";
import Assets from "../../../assets";
import RoutesPath from "../../../constants/Routes";

const NavBar = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="bg-[#45a3af] fixed top-0 w-full z-50">
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between">
          <img
            className="w-20 h-20 object-contain"
            src={Assets.LogoWhite}
            alt=""
          />
          <ul className="flex items-center gap-10">
            <li>
              <Link
                to={RoutesPath.home}
                className={`${
                  activeTab === "Home" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`${
                  activeTab === "Assortments" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                Assortments
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`${
                  activeTab === "Blogs" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={RoutesPath.about}
                className={`${
                  activeTab === "About" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                About Farmfresh
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`${
                  activeTab === "Contact" ? "font-[700]" : "font-[400]"
                } text-lg text-white`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
