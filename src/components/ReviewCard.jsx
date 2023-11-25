import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="rounded-full"
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="mt-3 flex justify-start gap-2.5 text-slate-gray font-montserrat leading-normal text-xl">
        <img src={star} alt="rating" width={24} height={24} className="object-contain m-0" /> <p>{rating}</p>
      </div>
      <h3 className="mt-1 text-3xl text-center font-bold font-palanquin leading-normal">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
