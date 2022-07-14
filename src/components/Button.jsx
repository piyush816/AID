const Button = ({ onClick, text, type }) => {
  return (
    <button
      className="py-4 px-8 hover:scale-95 transition-transform bg-primary text-base text-white w-full rounded-lg"
      type={type ? type : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
