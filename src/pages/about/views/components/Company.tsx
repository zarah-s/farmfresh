const Company = () => {
  return (
    <div className="mt-5 company-bg xxl:h-[70vh] h-auto py-5 xl:px-20 lg:px-20 md:px-20 sm:px-2 xs:px-2">
      <div className=" xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full xs:w-full ">
        <div className="bg-white p-10 rounded-xl">
          <h1 className="text-primary text-3xl font-[400]">
            The Parent Company
          </h1>
          <p className="text-primary text-sm">
            Integrated Dairies is wholly-owned indigenous integrated dairy
            company in Nigeria involved in the whole dairy value chain - Feed,
            fodder production and sales, animal husbandry, milk production,
            processing, and marketing of dairy products. Incorporated as a
            Private Limited Liability Company in April 2003, Integrated Dairies
            Limited (IDL) has been a benchmark for excellence in the nation’s
            evolving dairy industry, bringing the freshest and highest-quality
            dairy products with no preservatives
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
