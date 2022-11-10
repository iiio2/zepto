const AvailableFontGroup = ({ fields, setFields }) => {
  const deleteFontField = (i) => {
    setFields(fields.filter((field, index) => index !== i));
  };
  const editFontField = (i) => {
    const original = [...fields];
    original[i] = { fontName: "Edited", value: ["Edited"] };

    setFields(original);
  };
  return (
    <div className="all-font-group">
      {fields.length > 0 && (
        <>
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
                  <td>
                    {new Intl.ListFormat("en", {
                      style: "long",
                      type: "conjunction",
                    }).format(field.value)}
                  </td>
                  <td>
                    {field.fontName === "Edited"
                      ? "Edited"
                      : field.value.length}
                  </td>
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
        </>
      )}
    </div>
  );
};

export default AvailableFontGroup;
