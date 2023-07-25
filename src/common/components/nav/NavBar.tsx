import Assets from "../../../assets";
const NavBar = () => {
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
              <a href="#" className="font-[700] text-lg text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-[400] text-lg text-white">
                Assortments
              </a>
            </li>
            <li>
              <a href="#" className="font-[400] text-lg text-white">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="font-[400] text-lg text-white">
                About Farmfresh
              </a>
            </li>
            <li>
              <a href="#" className="font-[400] text-lg text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
