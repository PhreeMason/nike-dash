const Button = ({ label, iconUrl, nbg }) => {
  const additionalClass = !nbg ? 'bg-coral-red text-white border-coral-red' : 'text-slate-gray border-slate-gray' 
  return (
    <button className={"flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full " + additionalClass}>
      {label}
      {iconUrl && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          alt="arrow-right"
        />
      )}
    </button>
  );
};

export default Button;
