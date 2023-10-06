import React from "react";
import { reviews } from "../constants";
import { star } from "../assets/icons";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="mt-4 m-auto max-w-lg text-center info-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        facilis.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

const ReviewCard = ({ review }) => {
  const { imgURL, customerName, rating, feedback } = review;

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
      </div>
    </div>
  );
};
