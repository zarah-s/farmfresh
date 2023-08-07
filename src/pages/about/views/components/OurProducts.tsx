import Product from "./Product";
import Assets from "../../../../assets";

const OurProducts = () => {
  return (
    <div className="m-20">
      <h1 className="text-[#398796] text-center font-[400] text-4xl">
        All Our Products are
      </h1>

      <div className="flex items-center justify-center gap-5 mt-20">
        <Product
          content="Farmfresh has no added preservatives. It is fresh and natural, thereby giving total nourishment to the family has no added preservatives. It is fresh and natural, thereby giving total nourishment to the family."
          img={Assets.Nopreservatives}
          title="No preservatives"
        />
        <Product
          content="Farmfresh has no added preservatives. It is fresh and natural, thereby giving total nourishment to the family has no added preservatives. It is fresh and natural, thereby giving total nourishment to the family."
          img={Assets.Probiotics}
          title="No preservatives"
        />
        <Product
          content="Farmfresh has no added preservatives. It is fresh and natural, thereby giving total nourishment to the family has no added preservatives. It is fresh and natural, thereby giving total nourishment to the family."
          img={Assets.MedicalAssociation}
          title="No preservatives"
        />
      </div>
    </div>
  );
};

export default OurProducts;
