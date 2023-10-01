import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center max-container gap-10 xl:flex-row"
    >
      <div>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          voluptatum.
        </p>

        <Button label={"Shop Now"} iconURL={arrowRight} />

        <div className="w-full flex items-center justify-starts flex-wrap gap-16 mt-20">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40 border-2 border-black">
        <img
          src={bigShoe1}
          alt="bigshoe1"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
