const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className="block text-white mb-1 font-extrabold">
      {children}
    </label>
  );
};

export default Label;
