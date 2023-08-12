import { Link } from "react-router-dom";
import Assets from "../../../assets";
import RoutesPath from "../../../constants/Routes";

const Footer = () => {
  return (
    <div id="contact" className="bg-primary py-10">
      <div className="container mx-auto xl:px-20 lg:px-20 md:px-20 sm:px-0 xs:px-0">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-5">
            <img src={Assets.LogoWhite} className="w-20 h-20" alt="" />
            <p className="text-white font-light">Integrated Dairies</p>
          </div>
          <h2 className="text-3xl text-white font-semibold">
            Simply Natural, Simply Nourishing...
          </h2>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 mt-20 gap-5">
          <div className="text-white font-light">
            <h3 className="font-[600] mb-2">Know Us</h3>
            <ul>
              <li>Service</li>
              <li>Support</li>
              <li>Terms & conditions</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="text-white font-light">
            <h3 className="font-[600] mb-2">Helpful Links</h3>
            <ul>
              <li>
                <Link to={RoutesPath.faq}>FAQ</Link>
              </li>
              <li>Legal</li>
              <li>Support</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="text-white font-light">
            <h3 className="font-[600] mb-2"></h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-1">
                <Assets.EmailIcon />
                <small className="text-sm">info@farmfreshdirect.ng</small>
              </li>
              <li className="flex items-center gap-1">
                <Assets.PhoneIcon />
                <small className="text-sm">+234 70341017338</small>
              </li>
              <li className="flex items-center gap-1">
                <Assets.LocationIcon />
                <small className="text-sm">
                  6 Keana Road, Jos, Plateau state, Nigeria.
                </small>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-white text-center mb-3">
              Contact Us
            </h1>
            <form>
              <input
                type="text"
                className="outline-none border-[1px] w-full border-white rounded-xl bg-transparent p-2 text-white"
                placeholder="Contact"
                name=""
                id=""
              />
              <button className="p-3 bg-white text-primary w-full rounded-xl mt-5">
                Send
              </button>
            </form>
          </div>
        </div>
        <p className="text-center font-light mt-10 text-white">
          {new Date().getFullYear()} Farmfresh, all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
