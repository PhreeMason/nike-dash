import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between max-lg:flex-col gap-10 items-center">
      <h3 className="font-palanquin text-4xl lg:max-w-md font-bold text-center leading-[68px]">
        Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="flex flex-row py-2 px-4 border-slate-gray border-2 rounded-[50px] justify-between">
        <input type="text" className="input" placeholder="your-email@nike.com" />
        <Button label='Sign Up' />
      </div>
    </section>
  );
};

export default Subscribe;
