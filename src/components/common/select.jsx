const Select = ({ name, value, onChange, fonts }) => {
  return (
    <select
      className="form-select"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option defaultValue="">Select a font</option>
      {fonts.map((font, index) => (
        <option value={font} key={index}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default Select;
