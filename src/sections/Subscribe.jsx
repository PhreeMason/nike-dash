import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between max-lg:flex-col gap-10 items-center"
    >
      <h3 className="font-palanquin text-4xl lg:max-w-md font-bold text-center leading-[68px]">
        Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          className="input"
          placeholder="your-email@nike.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
