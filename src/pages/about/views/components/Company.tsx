import Assets from "../../../../assets";

const Company = () => {
  return (
    <div className="mt-5 relative">
      <img src={Assets.CompanyBanner} alt="" />
      <div className="xl:block lg:block md:block sm:hidden xs:hidden">
        <div className="absolute top-10 left-20 w-1/4 ">
          <div className="bg-white p-10 rounded-xl">
            <h1 className="text-primary text-3xl font-[400]">
              The Parent Company
            </h1>
            <p className="text-primary text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and... Read more
            </p>
            <button className="bg-primary w-full mt-10 p-3 text-white rounded-lg ">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
