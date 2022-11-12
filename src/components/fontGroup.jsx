import { useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";

const FontGroup = ({ fonts, setFields }) => {
  const [title, setTitle] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      fontName: "",
      value: "",
    },
  ]);

  const getGroupValues = () => {
    if (title.trim().length === 0) return null;
    let group = [...inputFields];
    const getValues = group.reduce((a, c) => {
      a[c.fontName] ??= [];
      a[c.fontName].push(c.value);
      return a;
    }, {});
    return Object.entries(getValues).map(([fontName, value]) => ({
      fontName,
      value: Array.from(new Set(value)).filter(Boolean),
    }));
  };

  const createGroup = (e) => {
    e.preventDefault();
    const groups = getGroupValues();
    for (let item of groups) {
      if (Array.from(new Set(item.value)).filter(Boolean).length < 2) {
        toast.error("Please select at least 2 fonts for each group");
        return;
      }
    }

    setFields([...groups]);
    setInputFields([{ fontName: "", value: "" }]);
    setTitle("");
    toast.success("Font group added");
  };
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputFields];
    if (value === "Select a font") return null;
    list[index][name] = value;
    setInputFields(list);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        fontName: inputFields[inputFields.length - 1].fontName,
        value: "",
      },
    ]);
  };

  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);

    setInputFields(rows);
  };

  return (
    <div className="font-group">
      {fonts.length > 0 && (
        <>
          <h4>create font group</h4>
          <p>you have to select at least two fonts</p>

          <form onSubmit={createGroup}>
            <input
              type="text"
              className="form-control"
              placeholder="Group Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {inputFields.map((data, index) => {
              const { fontName, value } = data;
              return (
                <div
                  className="font-field d-flex justify-content-between mt-2 gap-2"
                  key={index}
                >
                  <input
                    type="text"
                    name="fontName"
                    value={fontName}
                    placeholder="Font Name"
                    className="form-control"
                    onChange={(e) => handleInputChange(index, e)}
                  />

                  <select
                    className="form-select"
                    name="value"
                    value={value}
                    onChange={(e) => handleInputChange(index, e)}
                  >
                    <option defaultValue="">Select a font</option>
                    {fonts.map((font, index) => (
                      <option value={font} key={index}>
                        {font}
                      </option>
                    ))}
                  </select>
                  {inputFields.length !== 1 && (
                    <h5
                      onClick={() => removeInputFields(index)}
                      style={{ cursor: "pointer" }}
                      className="text-danger mt-1"
                    >
                      X
                    </h5>
                  )}
                </div>
              );
            })}

            <div className="font-group-btn d-flex justify-content-end mt-3">
              <button
                disabled={inputFields.length < 2}
                type="submit"
                className="btn btn-success"
              >
                Create
              </button>
            </div>
          </form>
          <button
            onClick={addInputField}
            style={{ border: "1px solid green", marginTop: "-4.2rem" }}
            className="btn btn-light"
          >
            + Add Row
          </button>
        </>
      )}
    </div>
  );
};

export default FontGroup;
