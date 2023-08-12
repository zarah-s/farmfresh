const Company = () => {
  return (
    <div className="mt-5 company-bg py-5 xl:px-20 lg:px-20 md:px-20 sm:px-2 xs:px-2">
      <div className=" xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full xs:w-full ">
        <div className="bg-white p-10 rounded-xl">
          <h1 className="text-primary text-3xl font-[400]">
            The Parent Company
          </h1>
          <p className="text-primary text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and... Read more
          </p>
          <button className="bg-primary w-full mt-10 p-3 text-white rounded-lg ">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
