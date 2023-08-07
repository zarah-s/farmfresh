import Assets from "../../../../assets";
interface Props {
  onTap: VoidFunction;
}
const Brands = ({ onTap }: Props) => {
  return (
    <div className="grid grid-cols-3">
      <Brand onTap={onTap} imgSrc={Assets.Brand1} title="Stirred Yoghurt" />
      <Brand onTap={onTap} imgSrc={Assets.Brand2} title="Milk" />
      <Brand onTap={onTap} imgSrc={Assets.Brand3} title="Drinking Yoghurt" />
      <Brand onTap={onTap} imgSrc={Assets.Soon} title="Coming Soon" />
      <Brand onTap={onTap} imgSrc={Assets.Brand3} title="Telsa" />
      <Brand onTap={onTap} imgSrc={Assets.Soon} title="Coming Soon" />
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
    <div onClick={onTap} className="relative h-80">
      <img src={imgSrc} className="h-80 object-cover w-full" alt="" />
    </div>
  ) : (
    <div onClick={onTap} className="relative h-80">
      <img src={imgSrc} className="h-80 object-cover w-full" alt="" />
      <div className="absolute bg-primary-transparent top-0 h-full w-full">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-white font-semibold text-3xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};
