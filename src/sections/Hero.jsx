import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, shoes } from "../constants/index";
import ShoeBox from "../components/ShoeBox";
import { useState } from "react";

const Hero = () => {
  const [activeShoe, setActiveShoe] = useState(shoes[1].bigShoe);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start mt-20 gap-16 w-full flex-wrap">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex h-full justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center sm:w-full">
        <img
          className="object-contain relative z-10"
          width={610}
          height={500}
          src={activeShoe.bigShoe}
          alt="shoe-collection"
        />

        <div className="flex flex-row justify-center items-start gap-4 absolute -bottom-[5%] sm:gap-6 sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <ShoeBox
              key={shoe.bigShoe}
              shoe={shoe}
              onClickHndl={setActiveShoe}
              activeShoe={activeShoe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
