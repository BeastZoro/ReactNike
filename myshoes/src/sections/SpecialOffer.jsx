import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="shoe offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero saepe
          animi quod officia dolor dolorem voluptates aliquid quia,
          exercitationem ea, rerum autem dignissimos minus? Voluptas nesciunt
          harum odio aperiam dignissimos!
        </p>
        <p className="mt-6 info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores placeat quo aperiam debitis optio esse expedita
          id, laboriosam cupiditate?
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={"Shop now"} iconURL={arrowRight} />
          <Button
            label={"Learn More"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
