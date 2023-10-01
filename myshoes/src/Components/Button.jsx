const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-4 font-montserrat bg-coral-red px-7 py-4 text-lg leading-none text-white rounded-full">
      {label}
      <img src={iconURL} alt="arrowRight" className="rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
