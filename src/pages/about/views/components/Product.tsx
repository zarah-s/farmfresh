interface Props {
  img: any;
  title: string;
  content: string;
}
const Product = ({ content, img, title }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="" />
      <div className="mt-4">
        <h3 className="text-[#398796] text-2xl font-[400]">{title}</h3>
        <p className="text-[#398796] text-sm mt-2">{content}</p>
      </div>
    </div>
  );
};

export default Product;
