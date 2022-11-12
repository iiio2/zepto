import { toast } from "react-toastify";

const AvailableFontBody = ({ fields, setFields }) => {
  const deleteFontField = (i) => {
    setFields(fields.filter((field, index) => index !== i));
    toast.error("Font group deleted");
  };
  const editFontField = (i) => {
    const original = [...fields];
    original[i] = { fontName: "Edited", value: ["Edited"] };

    setFields(original);
    toast.info("Font group edited");
  };

  const format = (field) => {
    return new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    }).format(field.value);
  };
  return (
    <tbody>
      {fields.map((field, index) => (
        <tr key={index}>
          <td>{field.fontName}</td>
          <td>{format(field)}</td>
          <td>{field.fontName === "Edited" ? "Edited" : field.value.length}</td>
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
  );
};

export default AvailableFontBody;
