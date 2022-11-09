import { useState, useEffect } from "react";
import _ from "lodash";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TTF"];

function App() {
  const [file, setFile] = useState(null);
  const [fonts, setFonts] = useState([]);
  const [title, setTitle] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      fontName: "",
      value: "",
    },
  ]);
  const [fields, setFields] = useState([]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputFields];
    list[index][name] = value;

    setInputFields(list);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        fontName: "",
        value: "",
      },
    ]);
  };

  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);

    setInputFields(rows);
  };

  const handleChange = (file) => {
    setFile(file);
  };

  const deleteFont = (font) => {
    setFonts(fonts.filter((f) => f !== font));
  };

  const getFonts = () => {
    let total = [];
    if (file) {
      for (let i = 0; i < file.length; i++) {
        const names = _.pick(file[i], ["name"]);
        let getNames = names.name.replace(".ttf", "");
        total.push(getNames);
      }
      setFonts(total);
    }
  };

  const createGroup = (e) => {
    e.preventDefault();
    setFields([...inputFields]);
    console.log(title, inputFields);
  };

  const deleteFontField = (i) => {
    setFields(fields.filter((field, index) => index !== i));
  };

  const editFontField = (i) => {
    console.log(i);
    const original = [...fields];
    original[i] = { fontName: "Edited", value: "Edited" };

    setFields(original);

    console.log(original[i]);
  };

  useEffect(() => {
    getFonts();
  }, [file]);

  return (
    <main className="container mt-3">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />

      <div className="show-fonts">
        <h4>our fonts</h4>
        <p>browser a list of zepto fonts to build your font group.</p>
        <table className="table">
          <thead>
            <tr>
              <th>FONT NAME</th>
              <th>PREVIEW</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fonts.map((font, index) => (
              <tr key={index}>
                <td>{font}</td>
                <td>Example Style</td>
                <td
                  onClick={() => deleteFont(font)}
                  style={{ cursor: "pointer" }}
                  className="text-danger"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="font-group">
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
                  className="form-control"
                  onChange={(e) => handleInputChange(index, e)}
                />

                <select
                  className="form-select"
                  name="value"
                  value={value}
                  onChange={(e) => handleInputChange(index, e)}
                >
                  <option value="">Select a font</option>
                  {fonts.map((font, index) => (
                    <option value={font} key={index}>
                      {font}
                    </option>
                  ))}
                </select>
                <h5
                  onClick={() => removeInputFields(index)}
                  style={{ cursor: "pointer" }}
                  className="text-danger mt-1"
                >
                  X
                </h5>
              </div>
            );
          })}

          <div className="font-group-btn d-flex justify-content-end mt-3">
            <button type="submit" className="btn btn-success">
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
      </div>
      <div className="all-font-group">
        <h4>our font groups</h4>
        <p>list of all available font groups.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Fonts</th>
              <th>Count</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={index}>
                <td>{field.fontName}</td>
                <td>{field.value}</td>
                <td>1</td>
                <td>
                  <h6
                    style={{ cursor: "pointer" }}
                    onClick={() => editFontField(index)}
                    className="text-info"
                  >
                    Edit
                  </h6>
                </td>
                <td>
                  <h6
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteFontField(index)}
                    className="text-danger"
                  >
                    Delete
                  </h6>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
