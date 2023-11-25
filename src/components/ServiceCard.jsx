const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex bg-coral-red rounded-full w-11 h-11 justify-center items-center">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-bold text-3xl font-palanquin leading-normal">{label}</h3>
      <p className="text-slate-gray break-words mt-3 font-montserrat text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
