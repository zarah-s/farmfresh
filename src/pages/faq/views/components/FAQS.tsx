import ProductFAQs from "./ProductFAQs";
import StorageFAQs from "./StorageFAQs";

const FAQS = () => {
  return (
    <div className="my-20 md:mx-20 sm:mx-5 xs:mx-5">
      <ProductFAQs />
      <div className="mt-20">
        <StorageFAQs />
      </div>
    </div>
  );
};

export default FAQS;
