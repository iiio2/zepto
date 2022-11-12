import Input from "./input";
import Select from "./select";

export const renderInput = (name, placeholder, value, onChange) => {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export const renderSelect = (name, value, onChange, fonts) => {
  return <Select name={name} value={value} onChange={onChange} fonts={fonts} />;
};

export const removeInput = (index, removeInputFields, inputFields) => {
  return (
    <>
      {inputFields.length !== 1 && (
        <h5
          onClick={() => removeInputFields(index)}
          style={{ cursor: "pointer" }}
          className="text-danger mt-1"
        >
          X
        </h5>
      )}
    </>
  );
};

export const createGroupBtn = (label, inputFields) => {
  return (
    <div className="font-group-btn d-flex justify-content-end mt-3">
      <button
        disabled={inputFields.length < 2}
        type="submit"
        className="btn btn-success"
      >
        {label}
      </button>
    </div>
  );
};

export const addRow = (label, addInputField) => {
  return (
    <button
      onClick={addInputField}
      style={{ border: "1px solid green", marginTop: "-4.2rem" }}
      className="btn btn-light"
    >
      {label}
    </button>
  );
};
