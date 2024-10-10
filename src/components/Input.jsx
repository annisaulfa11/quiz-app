
const Input = ({ id, type, value, onChange, placeholder, className }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
      required
    />
  );
};

export default Input;
