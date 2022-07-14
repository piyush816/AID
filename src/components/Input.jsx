const Input = ({ id, name, placeholder, type }) => {
  return (
    <input
      type={type}
      required
      className="py-4 mb-4 border text-base bg-light outline-none focus-within:border-sky-400 focus-within:border-2 rounded-lg px-8 w-full"
      name={name}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default Input;
