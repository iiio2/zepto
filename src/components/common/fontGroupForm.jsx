import { useState } from "react";
import { toast } from "react-toastify";
import {
  renderInput,
  renderSelect,
  removeInput,
  createGroupBtn,
  addRow,
} from "./form";

const FontGroupForm = ({ fonts, setFields }) => {
  const [title, setTitle] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      fontName: "",
      value: "",
    },
  ]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (index, { currentTarget: input }) => {
    const list = [...inputFields];
    if (input.value === "Select a font") return null;
    list[index][input.name] = input.value;
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
    if (Array.isArray(groups)) {
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
    }
  };
  return (
    <>
      <form onSubmit={createGroup}>
        {renderInput("fontTitle", "Group Title", title, handleTitleChange)}

        {inputFields.map((data, index) => {
          const { fontName, value } = data;
          return (
            <div
              className="font-field d-flex justify-content-between mt-2 gap-2"
              key={index}
            >
              {renderInput("fontName", "Font Name", fontName, (e) =>
                handleInputChange(index, e)
              )}

              {renderSelect(
                "value",
                value,
                (e) => handleInputChange(index, e),
                fonts
              )}

              {removeInput(index, removeInputFields, inputFields)}
            </div>
          );
        })}

        {createGroupBtn("Create", inputFields)}
      </form>
      {addRow("+ Add Row", addInputField)}
    </>
  );
};

export default FontGroupForm;
