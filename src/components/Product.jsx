import { star } from "../assets/icons";

const Product = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center">
      <img className="w-[280px] h-[280px]" src={imgURL} alt={name} />
      <div className="mt-8 flex justify-start gap-2.5 text-slate-gray font-montserrat leading-normal text-xl">
        <img src={star} alt="rating" width={24} height={24} /> <p>(4.5)</p>
      </div>
      <div className="flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">
          {name}
        </h3>
        <p className="text-coral-red mt-2 text-2xl font-semibold font-montserrat">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Product;
