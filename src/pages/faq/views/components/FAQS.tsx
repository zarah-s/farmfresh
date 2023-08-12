import ProductFAQs from "./ProductFAQs";
import StorageFAQs from "./StorageFAQs";

const FAQS = () => {
  return (
    <div className="m-20">
      <ProductFAQs />
      <div className="mt-20">
        <StorageFAQs />
      </div>
    </div>
  );
};

export default FAQS;
