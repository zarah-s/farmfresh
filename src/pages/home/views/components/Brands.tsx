import Assets from "../../../../assets";
interface Props {
  onTap: Function;
}
const Brands = ({ onTap }: Props) => {
  return (
    <div className="">
      <h1 className="text-2xl text-primary text-center font-semibold">
        Our Assortments
      </h1>
      <div className="my-10"></div>

      <div
        id="brands"
        className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2"
      >
        <Brand
          onTap={() => {
            onTap(1);
          }}
          imgSrc={Assets.Brand1}
          title="Stirred Yoghurt"
        />
        <Brand
          onTap={() => {
            onTap(2);
          }}
          imgSrc={Assets.Brand2}
          title="Milk"
        />
        <Brand
          onTap={() => {
            onTap(3);
          }}
          imgSrc={Assets.Brand3}
          title="Drinking Yoghurt"
        />
        <Brand
          onTap={() => {
            onTap(0);
          }}
          imgSrc={Assets.Soon}
          title="Coming Soon"
        />
        <Brand
          onTap={() => {
            onTap(0);
          }}
          imgSrc={Assets.Brand4}
          title="Telsa"
        />
        <Brand
          onTap={() => {
            onTap(0);
          }}
          imgSrc={Assets.Soon}
          title="Coming Soon"
        />
      </div>
    </div>
  );
};

export default Brands;

interface BrandProps {
  imgSrc: any;
  title: string;
  onTap: VoidFunction;
}
const Brand = ({ imgSrc, title, onTap }: BrandProps) => {
  return imgSrc === Assets.Soon ? (
    <div onClick={onTap} className="relative xl:h-80 xxl:h-96">
      <img
        src={imgSrc}
        className="xl:h-80 xxl:h-96 object-cover w-full"
        alt=""
      />
    </div>
  ) : (
    <div onClick={onTap} className="relative xl:h-80 xxl:h-96">
      <img
        src={imgSrc}
        className="xl:h-80 xxl:h-96 object-cover w-full"
        alt=""
      />
      <div className="absolute bg-primary-transparent top-0 h-full w-full">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-white font-semibold text-3xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};
