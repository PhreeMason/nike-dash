import { reviews } from "../constants/index";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col">
      <div className="flex flex-1 flex-col">
        <h3 className="font-palanquin text-center capitalize text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers</span> Say?
        </h3>
        <p className="mt-4 info-text text-center m-auto max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
