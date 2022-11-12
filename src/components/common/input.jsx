const Input = ({ name, value, onChange, placeholder }) => {
  return (
    <input
      name={name}
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
