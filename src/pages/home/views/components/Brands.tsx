import Assets from "../../../../assets";

const Brands = () => {
  return (
    <div className="grid grid-cols-3">
      <Brand imgSrc={Assets.Brand1} title="Stirred Yoghurt" />
      <Brand imgSrc={Assets.Brand2} title="Milk" />
      <Brand imgSrc={Assets.Brand3} title="Drinking Yoghurt" />
      <Brand imgSrc={Assets.Soon} title="Coming Soon" />
      <Brand imgSrc={Assets.Brand3} title="Telsa" />
      <Brand imgSrc={Assets.Soon} title="Coming Soon" />
    </div>
  );
};

export default Brands;

interface BrandProps {
  imgSrc: any;
  title: string;
}
const Brand = ({ imgSrc, title }: BrandProps) => {
  return imgSrc === Assets.Soon ? (
    <div className="relative h-80">
      <img src={imgSrc} className="h-80 object-cover w-full" alt="" />
    </div>
  ) : (
    <div className="relative h-80">
      <img src={imgSrc} className="h-80 object-cover w-full" alt="" />
      <div className="absolute bg-primary-transparent top-0 h-full w-full">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-white font-semibold text-3xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};
